// __dirname : it return directory path
// __filename : it return current file path

const { log } = require('console');
const os = require('os');
const path = require('path');
console.log(path.basename(__filename));

console.log("==============");

console.log(os.arch());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.userInfo());
console.log(os.homedir());

