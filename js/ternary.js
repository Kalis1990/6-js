/*
TERNARY operator
suprastintas if/else
null - neegzistuojanti reiksme einamuoju metu kuria planuojame gauti
*/

let ats = null;
const a = 4;
const b = 2;

if (a > b){
    ats = 'daugiau';
} else {
    ats = 'Ne daugiau';
}
console.log(ats);

const tern = a > b ? 'daugiau' : 'Ne daugiau';
console.log(tern);

const egz = 1 ? 2 ? 3 : 4 : 5; // cia yra tas pats kaipir apacioje 1 taip 2 taip 3 taip 4 false 5 false skaiciuoja paskutini 'true

console.log(egz);
//kodel 3? pabandom su if
//reiksmiu pozitivumas/negativumas
//viskas taip isskirus (0)
//boolean
//null -> false
//undefined -> false
//stringai -> viskas taip, isskirus (0)
if(null){
    console.log('taip');
}else {
    console.log('ne');
}

