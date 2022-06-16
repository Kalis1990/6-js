const n1 ='dsad7dsa';
const n2 =5;

function suma(a, b){
    const initialAsize = ('' + a).length;
    const initialbsize = ('' + b).length;
    a=parseInt(a);
    b=parseInt(b);

    const afterAsize = ('' + a).length;
    const afterBsize = ('' + b).length;
    

    if(isNaN(a)|| initialAsize !== afterAsize){
        return 'error: pirmas parametras ne skaicius'
    }

    if(isNaN(b)|| initialBsize !== afterBsize){
    
        return 'error: antras parametras ne skaicius'
    
}
    return a + b;
}
const ats = suma(n1,n2);
console.log(ats);



console.log();

const n3 ='7uhi';
const n4 =5;

function suma(c, d){
    c=parseInt(c);
    d=parseInt(d);
        if(isNaN(c)){
        return 'error: pirmas parametras ne skaicius'
    }

    if(typeof d!== 'number'){
    
        return 'error: antras parametras ne skaicius'
    
}
    return c + d;
}
const odp = suma(n3,n4);
console.log(odp);
