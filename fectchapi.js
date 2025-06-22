// fetch('https://jsonplaceholder.typicode.com/post').then(response=>{

// if(!response.ok){

//        throw new Error('network is not response ')
// }
// return response.json();

// })


fetch('https://jsonplaceholder.typicode.com/post').then(response=>{
 if(!response.ok)
{
        throw new Error ('Network is not responsding')
}           return response.json();
}).then(data => console.log(data))


// fetch('https://jsonplaceholder.typicode.com/post').then(response =>{

//          if(!response){
             
//                 throw new Error ('Network is not Responding')
//                 return response.json();

//          }

// }).then(data => console.log(data))