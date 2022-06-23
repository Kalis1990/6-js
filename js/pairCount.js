const input = '41784893121647609903177765237114105710163033405151102628574101769692819342643862025681761286386835283549794719114001073639481418186559020218050872444277624512';

function pairCount(str){
    const ats = Array(100).fill(0);
    for( let i = 1; i < str.length; i++){
        const current = str[i];
        const previous = str[i-1];
        const index = parseInt(previous + current);
        ats[index]++;

    }
    return ats;
    
}
function max(list){
    const biggest = [...list].sort((a, b) => b - a)[0];
    const ats = [];
    for( let i = 1; i < list.length; i++){
        if(list[i] === biggest){
            ats.push(i);
        }
    }
    return ats;
}
console.log(pairCount(input))
