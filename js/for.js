/*
CIKLAI:
for, for-of, for-in, foreach, while, do-while, map, filter, reduce, sort, ...
sablonas
for () {}
*/

const kupiuros = [20, 5 , 50, 100, 20];

let pinigine = 0;

console.log('STRART');
//   pozicija 0 jei parasyti 2 tai skaiciuos nuo 2   
for(let i=0; i < kupiuros.length; i++) {  //jei norime skaiciuoti kas 2 kurpiura galime uzrasyti i+=2
    const kupiura = kupiuros[i];
    pinigine += kupiura;
    // console.log(i, ')', kupiuros[i]);
    console.log(i, ')', kupiura, '->', pinigine);

}
console.log('END');
console.log(pinigine);

console.log('-----------------------');
for (let i = -100; i <= -90; i++){
    console.log(i);
}
console.log('------------------------');
for (let i = -90; i >= -100; i--){
    console.log(i);
}
console.log('------------------------');
console.log([].length);
console.log(['a', 'b'].length);
console.log(['a', 'b', 'c'].length);

console.log([].length);
console.log(['vasara'].length);
console.log(['ziema'].length);

const word = 'Karsta vasara!';
for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    console.log(i, ')', letter);
}

// pinigine =+ kupiuros[index];
// index += 1;
// console.log(pinigine);

// pinigine =+ kupiuros[index];
// index += 1;
// console.log(pinigine);


// pinigine += kupiuros[index]; ilgesnis variantas
// console.log(pinigine);

// pinigine = pinigine + kupiuros[1];
// console.log(pinigine);

// pinigine = pinigine + kupiuros[2];
// console.log(pinigine);

// pinigine = pinigine + kupiuros[3];
// console.log(pinigine);

// pinigine = pinigine + kupiuros[4];
// console.log(pinigine);

