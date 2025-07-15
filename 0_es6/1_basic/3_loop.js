
// [0] 기존 자바스크립트

/*
var queryString ='kind =it&title=python&cnt=3';
var chunks = queryString.split('&');
//console.log(chunks);
var result ={};

for(var i=0; i<chunks.length;i++){
    var parts =chunks[i].split('=');
    //console.log(parts);
    var key =parts[0];
    var value =parts[1];
    result[key]=value;

    }
console.log(result);
*/
/*
// [1] forEach()
var queryString ='kind =it&title=python&cnt=3';
var chunks = queryString.split('&');
var result ={};

chunks.forEach((chunk)=>{
    const [key,value] =chunk.split('=');
    result[key]=value;
} )
console.log(result);


*/
//[2]map() :리턴값을 받을 수 있음
var queryString ='kind =it&title=python&cnt=3';
var chunks = queryString.split('&');

var result = chunks.map((chunk)=>{
    const [key,value] =chunk.split('=');
    return {key,value};
});
console.log(result);


