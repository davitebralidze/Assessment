export class Utils {

    static createTestFileFromExistingOne(testFileName: string): Promise<string> {
        const fs = require('fs');
        const path = require('path');

        const existingFilePath = path.join('test-files/lorem-ipsum.pdf');
        const newFilePath = path.join(`test-files/${testFileName}.pdf`);

        return new Promise((resolve, reject) => {
            fs.readFile(existingFilePath, (err, data) => {
                if (err) {
                    return reject(`Error reading the file: ${err}`);
                }
                fs.writeFile(newFilePath, data, (err) => {
                    if (err) {
                        return reject(`Error writing the new file: ${err}`);
                    }
                    resolve(newFilePath);
                });
            });
        });
    }

    static deleteFile(filePath: string): Promise<void> {
        const fs = require('fs');
        const path = require('path');

        return new Promise((resolve, reject) => {
            fs.unlink(path.join(filePath), (err) => {
                if (err) {
                    return reject(`Error deleting the file: ${err}`);
                }
                resolve();
            });
        });
    }

    static returnDefaultString () {
        return (Math.random() + 1).toString(36).substring(2);
    }

}