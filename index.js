/* primary file for the Api
*
*/

var http =require('http');

var url =require('url');



var server=http.createServer(function(req,res){

    var parsedUrl=url.parse(req.url,true);
    var path=parsedUrl.pathname;

    var trimpath=path.replace(/^\/+|\/+$/g,'');


   res.end("hello world");

   console.log('request recived path:'+trimpath);
})
   server.listen(3000,function(){

      console.log("the server listeninng on port");
   })
