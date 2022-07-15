function equalOrNot(a,b){
    if(a>b){
        return `${a} is greater than ${b}`;
    } else if(a<b){
        return `${b} is greater than ${a}`;
    }else{
        return `They are equal`;
    }
}
console.log(equalOrNot(6,6));

console.log('---------2----------');

function iki10() {
    for(let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
iki10();

console.log('---------3----------');

function iki10() {
    for(let i = 0; i <= 10; i+=2) {
        console.log(i);
    }
}
iki10();

console.log('---------4----------');

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let skaiciai = [];
for(let i = 0; i < 5; i++){
skaiciai.push(rand(1, 10)); 
};
console.log(skaiciai);

console.log('---------5----------');

function while5(){
let skaiciai2 = 0;
while (skaiciai2 != 5) {
    skaiciai2=Math.floor(Math.random()*10)
    console.log(skaiciai2);
}
}
while5();
console.log('---------6----------');

const arrajus = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

console.log('---------7---------');
function randomString(length) {
    let result = [];
    let raides = 'ABCD';
    let ilgis = raides.length;
    for ( let i = 0; i < length; i++ ) {
      result += raides.charAt(Math.floor(Math.random() * 
 ilgis));
   }
   return result;
}

console.log(randomString(100));
//praktine uzduotis

