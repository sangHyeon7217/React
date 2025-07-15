
//[1]function 명령어 
function func1(first,second){
    return first + second;
}

//[2]function leteral(변수값)
let func2 =function(first,second){
    return first+ second;
};


//[3]arrow function
let func3 =(first,second)=> {return first+second; };

let func4 =(first,second) => first+second;

console.log(func1(1,2));
console.log(func2(1,2));
console.log(func3(1,2));
console.log(func4(1,2));

class Myclass{
    value =10;
    constructor(){
        
        var func2_add =function(first,second){
            return  this.value + first +second;
        }.bind(this);
        
        console.log('확인2:'+func2_add(1,2));

        var func3_add =(first,second) =>this.value + first +second;
         console.log('확인3:'+func2_add(3,4));
    }
}

var my = new Myclass();