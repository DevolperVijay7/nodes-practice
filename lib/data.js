var fs = require('fs');
var path = require('path');

var lib={};

// base directory of the data folder 
lib.baseDir =path.join(__dirname,'/../.data/');

lib.create = function(dir,file,data,callback){

    // open the file 
    fs.open(lib.baseDir+dir+'/'+file+'.json','wx',function(err,fileDescriptor){
            if(!err && fileDescriptor){

                // conver data to string 
                var stringData= JSON.stringify(data);

                  fs.writeFile(fileDescriptor ,stringData,function(err){
                  if(!err){

                    fs.close(fileDescriptor,function(err){

                        if(!err){

                            callback(false);
                        }
                        else {
                               callback('error closing')
                        }
                    })    

                  }else {
                      callback('Error writing to new file')
                  }

                  });
            }  else{

                  callback('could not create new file ist aleredy s')
            }
    })   
};


module.exports = lib;