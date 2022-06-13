//function declaration
function sudetis(a, b){
    return a + b;
}
console.log(7, '+', 5, '=', sudetis(7, 5))
//anonimine funkcija
function atimtis(a, b){
    return a - b;
}
//arrow function; pvz : c# vadinama lambda funkcija
console.log(7, '*', 5, '=', atimtis(7, 5))
function atimtis(a, b){
    return a - b;
}

const daugyba = (a, b) => {
    return a * b;
}
console.log(7, '*', 5, '=', daugyba(7, 5))

//kai logikos bloke yra tik 1 procedura, tai ne nauduojam {} ir return
const dalyba = (a, b) => a / b;
console.log(7, '/', 5, '=', dalyba(7, 5));

//kai logikos bloke yra tik 1 procedura, tai ne nauduojam ()
const kvadratas = a => a ** 2;
console.log(7, '**', 2, '=', kvadratas(7));





console.log(7, '-', 5, '=', atimtis(7, 5))
function atimtis(a, b){
    return a - b;
}
console.log(7, '-', 5, '=', atimtis(7, 5))

function x1(){ }
function x2(){ }

// const vartotojoPasirinkimas = 'g';
// const kuriaFunkcijaKviesti = vartotojoPasirinkimas === 'g' ? x1: x2;

// kuriaFunkcijaKviesti()
const a = 7;
const b = 7;

const plotas = a !== b ? function (a, b) { return a*b; } : function(a){ return a*a;
}

console.log(plotas(a, b))
