/*String -> tekstas
iniciavimas:
-viengubos kabutes
- dvygubos kabutes
- backtick kabutes
*/
const username = 'Petras';
console.log(username);

const city = "Miestelis";
console.log(city);

const kabute1 = "Vienguba (') kabute.";
console.log(kabute1);

const kabute2 = 'Dviguba (") kabute.';
console.log(kabute2);

const kabute12 = "Vienguba (\') ir dvyguba (\") kabutes.";
console.log(kabute12);

const kabute122 = 'Vienguba (\') ir dvyguba (\") kabutes.';
console.log(kabute122);

const keliosEilutes = '<div>\
                        <p>Labas</p>\
                        </div>';

const username2 = 'Maryte';
const parosMetas = 'vakaras';
// const pasisveikinimas = 'labas rytas, Maryte!'; 
const pasisveikinimas = 'labas ' + parosMetas + ', ' + username2 + '!';               
console.log(pasisveikinimas);

const hello = `labas ${parosMetas}, ${username2}!`;
console.log(hello);

//siandien yra 23 laipsniai silumos ir nuotaika yra gera.
const temp = 23;
const nuotaika = 'gera';
const orai = `siandien yra ${temp} (jauciasi kaip : ${temp+4}) laipsniai silumos ir nuotaika yra ${nuotaika}.`;
console.log(orai)

console.log('Labas \\ rytas')
console.log('Labas \\\\ rytas')