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

// const stringToNumber = '1234'
// const nr = +stringToNumber
// console.log(stringToNumber)
// console.log(nr)


// const findAverage =[1, 3, 5, 7]
// function (nums) {
//     return nums => Math.sum(...nums)/nums.length
// }
    
// function isVowel(char) {
//     if (char.length == 1) {
//       var vowels = new Array("a", "e", "i", "o", "u");
//       var isVowel = false;
  
//       for (e in vowels) {
//         if (vowels[e] == char) {
//           isVowel = true;
//         }
//       }
  
//       return isVowel;
//     }
//   }
console.log('-------------------------')

const first = 'abcde';
const second ='cdefgh';
function mergeStrings(first, second){
    return first + second;
}

const third = mergeStrings(first, second)
console.log(third)
const b1 = [];
for (const n of third) {
    if (!b1.includes(n)) {
        b1.push(n);
    }
}
console.log(b1.toString().replace(/\,/gi, ""))

//   const pasisveikinimas = first + second;               
//  const r = [];
//     for (const n of pasisveikinimas) {
//       if (!r.includes(n)) {
//       r.push(n);
//       console.log(r)
//         }
        
//   }}
console.log('_______________')


const sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
    7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 
    5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 
    6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825],
monday = [9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
    6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 
    5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842,
    7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098, 6099, 5828, 7217, 9387],
tuesday = [8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
     7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313,
     7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 
     5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756, 5717, 7555, 9447, 7703],
wednesday = [6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 
       5047, 6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710,
       5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 
       9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357, 7378, 9598, 5405, 9493],
thursday = [6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402,
      9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 
      7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858, 5360, 6638, 8012, 8701],
friday = [5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 
   6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 
   9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617,
   5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455, 8720, 5725, 6960, 5127],
saturday = [5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 
      5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 
      5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 
      7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184, 7960, 9455, 5633, 9085];

let week = sunday+monday+tuesday+wednesday+thursday+friday+saturday;
console.log(Math(week*20))
