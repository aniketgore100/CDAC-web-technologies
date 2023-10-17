const fs = require('fs');
fs.unlink('./data2.txt', (err)=>{
    console.log("successfull");
})