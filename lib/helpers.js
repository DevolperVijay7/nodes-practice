/*
  * Helpers for variosu tasks

*
*/
  var crypto =require('crypto');
var helpers ={};

   // create a SHA256

    helpers.hash = function(str){
        if(typeof(str) == 'string' && str.length >0){
           var hash =crypto.createHmac('sha256',confirm.hashingsecret).update(str).digest('hex')
           return hash;
        }else{
            return false;
        }
    };


// export the module 

module.exports =helpers;