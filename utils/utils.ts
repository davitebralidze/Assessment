const fs = require('fs');
const path = require('path')
const { faker } = require('@faker-js/faker');

export class Utils {
    static async  createFile(fileName: string): Promise<void> {
        const randomData = faker.lorem.paragraphs(200);
        await fs.writeFileSync(`${fileName}.txt`, randomData);
    }

    static async deleteFile(fileName: string): Promise<void> {
        await fs.unlinkSync(path.join(`${fileName}.txt`));
    }

    static async deleteFolder(folderName: string): Promise<void> {
        if(fs.existsSync(path.join(folderName))) {
            fs.rmSync(path.join(folderName), { recursive: true, force: true });
        }
    }
}