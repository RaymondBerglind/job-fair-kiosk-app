var fs = require('fs');
const FILENAME = 'submissions.csv';

function readFile(file) {
    return new Promise(function (resolve, reject) {
        fs.readFile(file, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
}

function appendToFile(file, content) {
    return new Promise(function (resolve, reject) {
        fs.appendFile(file, content, function (err) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
}

function writeSignupData(data) {
    var signupCSVLine = data.Email + '\n';
    appendToFile(FILENAME, signupCSVLine);
}

module.exports = {
    readFile: readFile,
    appendToFile: appendToFile,
    writeSignupData: writeSignupData
};
