const fs = require('fs');
const path = require('path');
import PDFDocument from 'pdfkit';
const { faker } = require('@faker-js/faker');

export class Utils {
    static async  createFile(fileName: string, fileFormat: string): Promise<{ filePath: string, fileFormat: string, fileName: string }> {
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

    static async deleteFolder(folderName: string): Promise<void> {
        if(fs.existsSync(path.join(folderName))) {
            fs.rmSync(path.join(folderName), { recursive: true, force: true });
        }
    }
}