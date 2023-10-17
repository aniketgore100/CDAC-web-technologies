const http = require('http');
const fs = require('fs');

const host = process.env.HOST;
const port = process.env.PORT;




let server = http.createServer((req, res) =>{
    // res.write("server created successfully");
    // res.end();

    if(req.url==="/" || req.url==="/index"){
        // res.write("this is home page");
        res.writeHead(200,{"content-type":"text/html"});
       let read =  fs.createReadStream(__dirname + "/index.html", "utf-8");
       read.pipe(res);   
        
    }else if(req.url==="/about"){
        res.writeHead(200,{"content-type":"text/html"});
        let read =  fs.createReadStream(__dirname + "/about.html", "utf-8");
        read.pipe(res);   
    }
    else if(req.url==="/services"){
        res.writeHead(200,{"content-type":"text/html"});
        let read =  fs.createReadStream(__dirname + "/services.html", "utf-8");
        read.pipe(res);   
    }
});
server.listen(port, ()=>{
    console.log(`server get started ${host}:${port}`);
})