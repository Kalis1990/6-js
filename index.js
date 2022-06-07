// const a = 4; 
// const b = 7;
// Kintamuju iniciavimo budai
// const - konstanta niekada nesikeicia, 
// let - kai norime kad verte musu keistusi
// var - senasis budas (nenadutoti, jei ne nori problemu)
// Name - stengtis ne naudoti konsoleje - geriausiai vietoj name > username


const username = 'Pete';
let pinigine = 10;
console.log(username, 'pinigineje turi', pinigine, 'euru');

pinigine = pinigine + 10;
console.log(username, 'dabar pinigineje turi', pinigine, 'euru');

let a = 4;
let b = 7;

console.log(a, '+', b, '=', a + b);
a = 9;

console.log(a, '+', b, '=', a + b);
console.log(a, '-', b, '=', a - b);
console.log(a, '*', b, '=', a * b);
console.log(a, '/', b, '=', a / b);
console.log(a, '%', b, '=', a % b);

let skaicius = 10;
skaicius = skaicius + 3;
skaicius = skaicius + 5;
skaicius += 3;
skaicius *= 3;
console.log('skaicius:', skaicius)
