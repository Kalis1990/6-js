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

Loginiai operatoriai:
&& (and) - turi tenkiti visos salygos
||(or) - turi tenkinti bent viena salyga
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

// const diena = 1;
// if (diena === 1) {
//     console.log('pirmadienis');
// } else{
//     console.log('ne pirmadienis');
// }

const diena = 4;
if (diena === 1) {
    console.log('pirmadienis');
} else{
    if (diena === 2){
        console.log('antradienis');
    } else{
        if (diena === 3){
            console.log('treciadienis');
        } else{
            if (diena === 4){
                console.log('ketvirtadienis');
            } else{
                if (diena === 5){
                    console.log('penktadienis');
                } else{
                    console.log('tokios dienos nera')
                }
            }
        }
    }
}

const day = 7;
if (day === 1){
    console.log('pirmadienis');
} else if (day === 2){
    console.log('antradienis')
} else if (day === 3){
    console.log('treciadienis')
} else if (day === 4){
    console.log('ketvirtadienis')
} else if (day === 5){
    console.log('penktadienis')
} else if (day === 6){
    console.log('sestadienis');
} else if (day === 7){
    console.log('sekmadienis');
} else{
    console.log('tokios dienos nera');
}
console.log('----------------------------------------');

const temp = 18;
const lietus = true;
const nuoKadaSilta = 12;

if(lietus === true){
    console.log('1)pasiimk skieti')
}else{
    if(temp > nuoKadaSilta){
    console.log('1)gali eiti su maike');
    }else{
        console.log('1)pasiimk striuke');
    }
}

if(lietus === true && temp >= nuoKadaSilta){
    console.log('2)varom nuogi')
} else if (lietus === true && temp < nuoKadaSilta){
    console.log('2)pasiimk palta ir skieti');
} else if (lietus === false && temp >= nuoKadaSilta){
    console.log('2)gali eiti su maike');
} else if (lietus === false && temp < nuoKadaSilta){
            console.log('2)pasiimk striuke');
}

