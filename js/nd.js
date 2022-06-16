//Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
const a = 5;
const b = 10;
const c = 15;
console.log(a);
console.log(b);
console.log(c);

//Sukurti 3 kintamuosius su teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
const n1 = 'Petriukas';
const n2 = 'Elvis';
const n3 = 'Zuokas';
console.log(n1);
console.log(n2);
console.log(n3);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
const s1 = [1, 2, 3, 4, 5];
const s2 = [2, 3, 4, 5, 6];
const s3 = [3, 4, 5, 6, 7];
console.log(s1);
console.log(s2);
console.log(s3);

//Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
//Po kiekvieno jų inicijavimo, išvesti į console
const t1 = ['Titanic', 'is', 'a', 'big', 'ship'];
const t2 = ['The', 'Plane', 'is', 'a', 'bird'];
const t3 = ['The', 'Glass', 'looks', 'like', 'cup'];

console.log(t1);
console.log(t2);
console.log(t3);

//Susumuoti visus skaičiaus tipo kintamuosius
//Rezultatą išvesti į console
const suma = s1[0]+s1[1]+s1[2]+s1[3]+s1[4];
console.log('Pirmo suma lygu ',suma);
const suma1 = s2[0]+s1[1]+s1[2]+s1[3]+s1[4];
console.log('Antro suma lygu ',suma1);
const suma2 = s3[0]+s1[1]+s1[2]+s1[3]+s1[4];
console.log('Trecio suma lygu ',suma2);


//Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
//Rezultatą išvesti į console
const text = t1[0] + ' ' + t1[1] + ' ' + t1[2] + ' ' + t1[3] + ' ' + t1[4]+ '. ' + t2[0] + ' ' + t2[1] + ' ' + t2[2] + ' ' + t2[3] + ' ' + t2[4] + '. ' + t3[0] + ' ' + t3[1] + ' ' + t3[2] + ' ' + t3[3] + ' ' + t3[4];
console.log(text);

//Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
//1-2+3-4+5
//Rezultatą išvesti į console
console.log('-----------------------------');
const skaiciai = [1, 2, 3, 4, 5];
const verte = skaiciai[0]-skaiciai[1]+skaiciai[2]-skaiciai[3]+skaiciai[4];
console.log(verte);

// Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, 
//jog tarp jų būtų kablelis ir tarpas

const textReturn = t3[4] + ', ' + t3[3] + ', ' + t3[2] + ', ' + t3[1] + ', ' + t3[0]+ ', ' + t2[4] + ', ' + t2[3] + ', ' + t2[2] + ', ' + t2[1] + ', ' + t2[0] + ', ' + t1[4] + ', ' + t1[3] + ', ' + t1[2] + ', ' + t1[1] + ', ' + t3[0] + '. ';
console.log(textReturn);

console.log('---------------------------');

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.

const pomidoras = 77;
const bandyk = 55;

if (pomidoras > bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (pomidoras < bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (pomidoras === bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (pomidoras !== bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (pomidoras >= bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (pomidoras <= bandyk) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('---------ZODZIAI--------------')
// Išvesti teksto tipo kintamųjų ilgius
// Tarpusavyje palyginti teksto tipo kintamųjų ilgius:


const zodis1 = 'zmogus';
const zodis2 = 'konstruktorius';
const rez1 = zodis1.length;
const rez2 = zodis2.length;
console.log(rez1);
console.log(rez2);

if (rez1 > rez2) {
    console.log('pomidoras');
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (rez1 < rez2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (rez1 === rez2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (rez1 !== rez2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (rez1 >= rez2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (rez1 <= rez2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')

// Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:

const sarasas1 = [1, 2, 3, 4, 5];
const sarasas2 = [3, 4, 5, 6, 7];
let sumasarasas1 = 0;
for(let i = 0; i < sarasas1.length; i++){
    sumasarasas1 += sarasas1[i];
}
let sumasarasas2 = 0;
for(let i = 0; i < sarasas2.length; i++){
    sumasarasas2 += sarasas2[i];
}
console.log(sumasarasas1);
console.log(sumasarasas2);

console.log('-----------------------')
if (sumasarasas1 > sumasarasas2) {
    console.log('pomidoras');
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (sumasarasas1 < sumasarasas2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (sumasarasas1 === sumasarasas2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (sumasarasas1 !== sumasarasas2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
}
console.log('-----------------------')
if (sumasarasas1 >= sumasarasas2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------')
if (sumasarasas1 <= sumasarasas2) {
    console.log('pomidoras')
} else{
    console.log('bandyk dar karta')
};
console.log('-----------------------');

// Ciklo for panaudojimas
// Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
//0.......0
let sumovita = 0;
for (let i=0; i<0;i++){
    sumovita += i;
}
console.log(sumovita)

//0....4
let sumovita1 = 0;
for (let i=0; i<4;i++){
    sumovita1 += i;
}
console.log(sumovita1)

//0.......100
let sumovita2 = 0;
for (let i=0; i<100;i++){
    sumovita2 += i;
}
console.log(sumovita2)

// 574 … 815
let sumovita3 = 0;
for (let i=574; i<815;i++){
    sumovita3 += i;
}
console.log(sumovita3)

//-50 … 50
let sumovita4 = 0;
for (let i=-50; i<50;i++){
    sumovita4 += i;
}
console.log(sumovita4)

//-70 … 30
let sumovita5 = 0;
for (let i=-70; i<30;i++){
    sumovita5 += i;
}
console.log(sumovita5);

console.log('______________')

// pvz.: “abcdef” -> “fedcba” naudojam cikla

const abc = ('abcdef');
let newtext = '';
const ilgis = abc.length
for (let i = ilgis - 1; i >= 0; i--) {
        newtext += abc[i];
    }
// otherWayRound += '.';
console.log(newtext);

// Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:

let cyfra = null;
for(i = 0; i < 11; i++){
    if ((i % 3) === 0)  //rasome kas dalinasi per 5
    cyfra++;
}
console.log(cyfra)

let cyfra1 = 0;
for(i = 0; i < 11; i++){
if ((i % 5) === 0)  //rasome kas dalinasi per 3 5 7
    cyfra1++;
}
console.log(cyfra1)

let cyfra2 = 0;
for(i = 0; i < 11; i++){
if ((i % 7) === 0)  //rasome kas dalinasi per 3 5 7
    cyfra2++;
}
console.log(cyfra2)

const stringToNumber = '1234'
const nr = +stringToNumber
console.log(stringToNumber)
console.log(nr)

let number = 2;
function simpleMultiplication(number) {
    if(number % 2 == 0) {
      return number*8}
  else {
      return number*9;
  }}

  let nr1 = 15;
  function oddCount(nr1){
    const numberEvens = 0;
  for (let i = 0; i < oddCount.length; i++) {
  if (oddCount[i] % 2 == 0) {
  numberEvens++;
  }
  }}
  