const texts = [
    '',
    'labas',
    'labas rytas',
    ' labas            rytas',
    'labas rytas Lietuva',
    ' Labas ',
    ' Labas',
    'Labas ',
];

function wordCount(str){
    if(str === ''){
        return 0
    }
    const words = str
    .trim()
    .split(' ')
    .filter(gapRemover => gapRemover !== ''); //cia kuriame nauja kintamaja

    // let count = 0;
    // for( const word of words){
    //     if(words !==''){
    //         count++;
    //     }
    // }
    // return count
        return words.length;
    }

for(const text of texts){
    const count = wordCount(text);
    console.log(count, `"${text}"`);
}

