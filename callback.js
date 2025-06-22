function makeApiCall(url,callback){

    fetch(url).then(response=> response.json())
    .then(data =>callback(data))
}

function handleData(data)
{
       console.log(data)
}

function main(){


      const apiUrl1= 'https://jsonplaceholder.typicode.com/posts/1';
      const apiUrl2= 'https://jsonplaceholder.typicode.com/posts/1';
      


makeApiCall(apiUrl1, handleData);
makeApiCall(apiUrl2, handleData);
}

main();