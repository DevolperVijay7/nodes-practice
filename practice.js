var http =require('http');


var server = http.createServer(function(req,res){

    res.end('Hello world ')
})

server.listen(3000,function(){

     console.log('server listien on 3000 now ')
})