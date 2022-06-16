const n1 ='8';
const n2 =5;

function suma(a, b){
    const initialAsize = ('' + a).length;
    const initialbsize = ('' + b).length;
    a=parseFloat(a);
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

module.exports = suma;