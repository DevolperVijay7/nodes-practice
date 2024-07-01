/* primary file for the Api
*
*/

var http =require('http');
var StringDecoder =require('string_decoder').StringDecoder;

var url =require('url');
var fs =require('fs');
var _data =require('./lib/data');

_data.create('test','newFile',{'vj':'test'},function (err){
       console.log("this was the error",err);

});





var server=http.createServer(function(req,res){

    var parsedUrl=url.parse(req.url,true);
    var path=parsedUrl.pathname;

     var queryStringObject=parsedUrl.query;
    var trimpath=path.replace(/^\/+|\/+$/g,'');
    var method=req.method.toLowerCase();


    // get the headers as an object 
    var headers=req.headers;
    
///  payload
    var decoder= new StringDecoder('utf-8');
    var buffer='';
    req.on('data',function(data){
   
      buffer += decoder.write(data);
      console.log(buffer,'testbuffer');
    });

    req.on('end',function(){
      buffer += decoder.end();
    


      
   res.end("hello world");

   console.log('request recived this payload:',buffer);
    });
});
   server.listen(3000,function(){

      console.log("the server listeninng on port");
   })


   //define router

   var router 