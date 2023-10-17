// fs module

const { log } = require('console');
const fs = require('fs');
let readData = fs.readFileSync('./data.txt', "utf-8");
console.log(readData);

fs.writeFileSync('./data2.txt', readData);

