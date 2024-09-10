import { resolve } from "path";

const fs = require('fs');
const path = require('path')
const { faker } = require('@faker-js/faker');

export class Utils {
    static createFile(fileName: string): Promise<void> {
        const randomData = faker.lorem.paragraphs(5);
        return new Promise((resolve, reject) => {
            fs.writeFile(`${fileName}.txt`, randomData, (err) => {
                if (err) {
                    return reject(`Error creating the file: ${err}`);
                }
                resolve();
            })
        })
    }

    static deleteFile(fileName: string): Promise<void> {
        return new Promise((resolve, reject) => {
            fs.unlink(path.join(`${fileName}.txt`), (err) => {
                if (err) {
                    return reject(`Error deleting the file: ${err}`);
                }
                resolve();
            });
        });
    }
}