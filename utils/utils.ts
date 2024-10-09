import PDFDocument from 'pdfkit';
import { FileObject } from '../custom-types/custom-types';
import { FileFormat } from '../enums/enums';
const { faker } = require('@faker-js/faker');
const fs = require('fs');

export class Utils {

    static async  createTestFile(fileFormat: FileFormat): Promise<FileObject> {  
        const fileName = faker.string.alphanumeric({length: 10});
        const filePath = `${process.env.TEST_FOLDER_PATH}/${fileName}.${fileFormat}`
        const randomData = faker.lorem.paragraphs(200);

        if (!fs.existsSync(process.env.TEST_FOLDER_PATH)) {
            fs.mkdirSync(process.env.TEST_FOLDER_PATH);
        }
        if(fileFormat == FileFormat.PDF) {
            const doc = new PDFDocument();
            const stream = fs.createWriteStream(filePath);
            doc.pipe(stream);
            doc.text(randomData);
            doc.end();
        } else {
            await fs.writeFileSync(filePath, randomData);
        }
        return {
            filePath,
            fileFormat,
            fileName
        }
    }

    static async deleteFile(filePath: string): Promise<void> {
        await fs.unlinkSync(filePath);
    }

    static async deleteFolder(folderPath: string): Promise<void> {
        if(fs.existsSync(folderPath)) {
            fs.rmSync((folderPath), { recursive: true, force: true });
        }
    }

    static async generateFakeUsername(): Promise<string> {
        return faker.internet.userName()
    }
}