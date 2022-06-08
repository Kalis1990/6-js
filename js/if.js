/*
Salygs sakinys

sablonai:
if(){}
if(){} else{}
if(){} else if(){} ... if(){}
if(){} else if(){} ... else if(){} else {}

Palyginimo operatoriai:
visi >, <, >=, <=, ==, !=, ===, !==
nauduotini: >, <, >=, <=, ===, !==
nenauduotini: ==, !=
*/

const a = 77;
const b = 55;

if (a > b) {
    console.log('pirmas yra daugiau uz antra')
} else{
    console.log('pirmas nera daugiau uz antra')
}

const temperatura = 15;
if(temperatura > 12){
    console.log('siadien yra silta');
}
else{ 
    console.log('siandien ne silta');
}
if(temperatura < 12){
    console.log('siadien yra silta');
}else{ 
    console.log('siandien ne salta');
}

const x=7;
if(x === 5){
    console.log('taip');
} else{
    console.log('ne');
}