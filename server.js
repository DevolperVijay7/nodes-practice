const http =require('http');
const fs = require('fs');
const server =http.createServer((req,res)=>{

    const url =req.url;
    const method=req.method;
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('<html>');
       return  res.end();
        

    }

    if(url ==='/message' && method === 'POST'){
        const body = [];
    req.on('data',(chunk)=>{
       console.log(chunk);
           body.push(chunk);
    });
    req.on('end',()=>{

          const pasrsebopdy = Buffer.concat(body).toString();
          const message = pasrsebopdy.split('=')[1];
          fs.writeFileSync('message.txt',message);
    });
        
        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
    }

    //console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title><head>');
    res.write('<body><h1>Hello I am vijay </h1></body>');
    res.write('<html>');
    res.end();
    
});

server.listen(3000);