/* Function:
logikos gabalas, kuri galim/ morim perpanauduoti

- gali gauti parametrus (pradines salygos)
- visada grazina savo rezultata:
    - mes galim nurodyti koki rezultata grainti
    - jei nenurodysime, tai grazintas "default'inis" rez
    - "deafault'nis" rezultatas yra undefined
*/    
function sumavimas(pirmasSkaicius, antrasSkaicius){
    console.log('pirmas', pirmasSkaicius);
    console.log('antras', antrasSkaicius);
    return pirmasSkaicius + antrasSkaicius;
}
function daugyba(a, b){
    return a * b;
}

function dalyba(a, b){
    return a / b;
}

function atimtis(a, b){
    return a - b;
}
const n1 = 5;
const n2 = 7;
const s1 = sumavimas(n1, n2);
const m1 = daugyba(n1, n2);
const a1 = atimtis(n1, n2);
const d1 = dalyba(n1, n2);
console.log(s1);
console.log(m1);
console.log(d1);
console.log(a1);


const n3 = 44;
const n4 = 77;
const rez2 = sumavimas(n3, n4);
console.log(rez2);


// const rez1 = n1 + n2;
// console.log(rez1);

// const n3 = 55;
// const n4 = 11;
// const rez2 = n3 + n4;
// console.log(rez2);

// const n5 = 1234;
// // const n6 = 2345;
// const n6 = 'rytas';
// const rez3 = n5 + n6;
// console.log(rez3);
