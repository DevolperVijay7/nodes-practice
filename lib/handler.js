var handlers ={};

  var _data=require('./data')

  var helpers =require('./helpers')
handlers.users = function(data,callback){

     var acepatable =['post','get','put','delete'];
     if(acepatable.indexOf(data.method)>-1){

        handlers._users[data.method](data,callback);
     }else{

           callback(405);
     }
};

// conatiner for users methods

  handlers._users ={};


  //  require data :first name .last , phone ,password 
  handlers._users.post = function(data,callback){

        //  check that all required fields are filled out 
        var firstname = typeof(data.payload.firstname) === 'string'  && data.payload.firstname.trim().length > 0 ? data.payload.firstname.trim() : false ;
        var lastname = typeof(data.payload.lastname) === 'string'  && data.payload.lastname.trim().length > 0 ? data.payload.lastname.trim() : false ;
        var phone = typeof(data.payload.phone) === 'string'  && data.payload.phone.trim().length > 10 ? data.payload.phone.trim() : false ;
        var password = typeof(data.payload.password) === 'string'  && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false ;
        

        if(firstname && lastname && phone && password){
      //  make sure user already exist 
           _data.read('users',phone ,function(err,data){
            

             if(err){
                        // Hash the password 

                        var hashedPassword = helpers.hash(password);

             }
             else{
                    // user alredy exist
                    callback(400,{'Error':'A users with that phone number alredy exists'})
             }
           });
        }
        else{
         callback(405);
        }
  };    

  handlers._users.get = function(data,callback){


  };

  handlers._users.put = function(data,callback){


  };

  handlers._users.delete = function(data,callback){




  };





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



 module.exports =handlers;