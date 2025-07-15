
fetch("https://jsonplaceholder.typicode.com/users")
    //.then( response=>{console.log(response) });
    //.then(response =>{return response.json() } )
    .then(response => response.json() )
    .then(users=>{

        users.forEach(user => {
            //console.log(user.name);
            console.log(user['name']+"/"+ user['address']['city']) ;
        })

    }  );
console.log('다른 작업 중');
