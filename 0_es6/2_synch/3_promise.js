

const likeCoffee =true;

const coffee = () => {
    return new Promise((resolve,reject)=>{
        if(likeCoffee) resolve('커피를 주문한다');
        else reject('주문하지 않는다');
    });
};

function order(message){
    console.log(message);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('커피를 포장한다')
        },2000);
    });
}

coffee()
    .then( result =>order(result) );

console.log('다른 작업 가능');




/*

    function coffee(){
    
    }

*/



