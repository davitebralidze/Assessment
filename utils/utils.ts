const fs = require('fs');
const path = require('path');
import PDFDocument from 'pdfkit';
const { faker } = require('@faker-js/faker');

export class Utils {

    static async  createTestFile(fileFormat: FileFormat): Promise<{ filePath: string, fileFormat: string, fileName: string }> {  
        const fileName = faker.string.alphanumeric({length: 10});

        if (!fs.existsSync(process.env.TEST_FOLDER_PATH)) {
            fs.mkdirSync(process.env.TEST_FOLDER_PATH);
        }
        const randomData = faker.lorem.paragraphs(200);
        const filePath = `./test-files/${fileName}.${fileFormat}`
        if(fileFormat == 'pdf') {
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
}

export enum FileFormat {
    TXT = 'txt',
    DOCX = 'docx',
    PDF = 'pdf'
}