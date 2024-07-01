var http =require('http');
var url =require('url');
var StringDecorder =require ('string_decoder').StringDecoder;
var config =require('./config');

var server= http.createServer(function(req,res){

    undefinedServer(req,res); 


});

server.listen(3000,function(){

    console.log("the server is listening on port 30000 now ")

});


// var httpServer =http.createServer(httpOptions,function(req,res){
//     undefinedServer(req,res);
// })

// All the server logic for the both the http and https servers

var undefinedServer =function(requ,res){
    // get the url and parse it
var parsedUrl =url.parse(req.url,true);
console.log(parsedUrl, 'testparseurl')


var path =parsedUrl.pathname;

var queryStringObject =parsedUrl.query;
var trimpath = path.replace(/^\/+|\/+$/g,'');


var method =req.method.toLocaleLowerCase();
//
var headers =req.headers;

// get payload if any
var decorder  =new StringDecorder('utf-8');
var buffer ='';
req.on('data',function(data){
    buffer += decorder.write(data)
})

req.on('end',function(){

    buffer += decorder.end();

    // choose the handler this request should go to . if one is not found use not found handler
    var choosehandler = typeof(router[trimpath]) !== 'undefined'  ? router[trimpath ]:handlers.notFound

    var data = {


        'trimpath':trimpath,
        'queryStringObject':queryStringObject,
         'method':method,
         'headers':headers,
         'payload':buffer
    };


   choosehandler(data,function(statusCode,payload){
               // use the status code call back the handler or default empty object
               statusCode = typeof(statusCode) == 'number' ? statusCode :200;

               payload = typeof(payload) == 'object' ? payload : {};

               //  convert the payload to a string 
               var payloadString =JSON.stringify(payload);
               res.setHeader('Content-Type','application/json');
               res.writeHead(statusCode);
               res.end(payloadString);


               console.log('returning this response ')
   });
//res.end('Hello world\n');
 // get the path

 // send the response 


console.log('Request recived on path:'+statusCode,queryStringObject)

   // res.end('hello world');
});

};


// define handelres 

var handlers ={};

handlers.sample =function(data,callback){
   // callback a http status code , and payload object

   callback(406,{'name':'sample handler'});
    
}

handlers.ping = function(data,callback){
    callback(200);
}
// not found handler 
 handlers.notFound = function(data,callback){
  callback(404)  
 };


// define a request router 
var router = {

       'sample': handlers.sample
}