const marks = [10, 2 ,8, 4, 6];

const minMark = Math.min(...marks);
console.log(minMark);

const maxMark = Math.min(...marks);
console.log(maxMark);

const pirmas = [7, 8, 9];
const antras = [77, 88, 99];

const pirmasAntras = [...pirmas,...antras] //galima taip ar tesiog skaiciais
const antrasPirmas = [77, 88, 99, 7, 8, 9]
console.log(pirmasAntras);
console.log(antrasPirmas);

const pirmoKopija = pirmas;
console.log(pirmoKopija)

pirmoKopija[0] = 'labas';
console.log(pirmoKopija);

console.log(pirmas)

console.log('-------------');

const mokiniai=['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(mokiniai)

// const mokiniuKopija = [...mokiniai]; gaunu nuoroda i atminti
const mokiniuKopija = [...mokiniai]; // gaunu pirmo lygio kopija
console.log(mokiniuKopija)

mokiniai[0]= 111;
console.log(mokiniai)
console.log(mokiniuKopija)


console.log('---------------');

// const mokiniai=['Petras', 'Maryte', 'Jonas', 'Ona'];
// console.log(mokiniai)

// const mokiniuKopija = mokiniai;
// console.log(mokiniuKopija)
// console.log(mokiniai)

// mokiniuKopija[0]= 555;
// console.log(mokiniuKopija)
// console.log(mokiniai)

// console.log('---------------');

// const a = 7;
// console.log(a);

// let b = a;
// console.log(b);

// b = 8;
// console.log(a)
// console.log(b)





