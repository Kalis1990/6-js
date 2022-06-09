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
