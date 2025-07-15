// [1]논리 연산자 결합

var arr =['one','two'];
var first =arr[0];
var third =arr[2];

console.log(first);//'one'
//console.log(second);// ?? error
console.log(third);// ?? undifined :존재하지않은 값을 넣으면 undifined 

//논리 연산자 결합
// or 연산자 : 둘중 하나만 true여도 true
console.log(first||'empty'); // first가 중심 ->one출력
console.log(third||'empty'); // 앞에는 false 지만 뒤에는 true여서 -> empty출력

//[2]삼항연산자와 truthy, falsy
//var truthy =true;
//var truthy =1; //0이 아닌 뭐든 숫자
//var truthy = -1; 
//var truthy = 'false'; //거짓
//var truthy = ['false']; //참
//var truthy =[]; //참
//var truthy ={}; //참 

//var samhang = truthy?"참" : "거짓";
//console.log("Truthy:" + samhang);

//var falsy = false; //거짓
//var falsy = 0;
//var falsy =''; //false
//var falsy = null;//false
//var falsy = undefined;//false
//var falsy = NaN; //false



//var samhang = falsy? '참' :'거짓' ;
//console.log('falsy:'+samhang);


//[3]요소분해
var list =[100,200,300];
var [item1,item2,item3=1004] = list;
console.log(item1);
console.log(item2);
console.log(item3); //undefined

//스와핑
[item2,item1] = [item1,item2];
console.log(item1);
console.log(item2);

//[4] 전개연산자(...)
var objOne ={hana:1,dul:2,gita:0};
var objTwo ={sam:3,sa:4,gita:1};
var old_combined ={
    hana :objOne.hana,
    dul: objOne.dul,
    gita:objOne.gita,
    sam:objTwo.sam,
    sa:objTwo.sa,
    gita:objOne.gita

}
console.log(old_combined);

var new_combined ={...objOne,...objTwo};
console.log(new_combined);

var {gita,...others}= new_combined;
console.log(gita);
console.log(others);

// let origin = {name:'홍길동',age:22,dept:'IT'}
// let temp =origin;
// temp.name ='이순신';
// console.log(temp);
// console.log(origin);

let origin2 = {name:'홍길동',age:22,dept:'IT'}
let temp2 = {...origin2,name:'이순신'}
console.log(temp2);
console.log(origin2);



