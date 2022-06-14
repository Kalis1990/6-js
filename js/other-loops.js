const marks = [10, 2, 8, 4, 6];
// for
for (let i = 0; i < marks.length; i++){
    const mark = marks[i];
    console.log(mark);
}

//for-of
for(const mark of marks){
    console.log(mark);
}
console.log('-----------while----------');
//while
let i = 0;
while (i < marks.length){
    const mark = marks[i];
    console.log(mark);
    i++;
}
console.log('-----------do while----------');
//do-while
let i2 = 0;
do {
    const mark = marks[i2];
    console.log(mark);
    i2++;
} while(i2 < marks.length)

console.log('-----------foreach----------');
//foreach
marks.forEach(mark =>{
    console.log(mark)
});

//map tik modifikuoja
console.log('=========map===========')
const rezMap = marks
.map(mark => mark * 2)
.map(mark => mark > 10 ? 10 :mark)

const rezMap2 = marks
.map(mark => mark * 2 > 10 ? 10 :mark * 2)

console.log(marks);
console.log(rezMap);
console.log(rezMap2);

//filtravimas
console.log('--------filter');
const filterMarks = marks
.filter(mark => mark > 2)
.filter(mark => mark < 7);

const filterMarks2 = marks.filter(mark => mark >2 && mark < 7);
console.log(marks)
console.log(filterMarks)
console.log(filterMarks2)

//mark & filter combo
console.log('-------filter------------');
const mapFilter = marks
.map(mark=> mark * 2)
.filter(mark => mark >5)
console.log(mapFilter)
console.log(marks)

// reduce
console.log('-------reduce------------');
const sumReduce = marks.reduce((total, mark) => total + mark);
const sumReduce20 = marks.reduce((total, mark) => total + mark, 20);
console.log(sumReduce)
console.log(sumReduce20)

const difReduce = marks.reduce((total, mark) => total - mark);
const difReduce20 = marks.reduce((total, mark) => total - mark, 20);
console.log(difReduce)
console.log(difReduce20)

const multiReduce = marks.reduce((total, mark) => total * mark);
const multiReduce20 = marks.reduce((total, mark) => total * mark, 20);
console.log(multiReduce)
console.log(multiReduce20)

const devReduce = marks.reduce((total, mark) => total / mark);
const devReduce20 = marks.reduce((total, mark) => total / mark, 20);
console.log(devReduce)
console.log(devReduce20)

//sort
console.log('---------sort------------')
const list = [10, 2, 8, 4, 6, 1, 7, 23, 17];
const numsort = [...list].sort();
const minMaxList = [...list].sort((a, b) => a - b);
const minMinList = [...list].sort((a, b) => b - a);
console.log(list);
console.log(numsort);
console.log(minMaxList);
console.log(minMinList);


const stringlist = ['a', 'b', 'c', 'de', 'a', 'at'];
const stringsort = [...stringlist].sort();
const minMaxStrings = [...stringlist].sort((a, b) => a > b ? -1:1);
const minMinStrings = [...stringlist].sort((a, b) => b < a ? -1:1);
console.log(stringlist);
console.log(stringsort);
console.log('max', minMaxStrings);
console.log('min', minMinStrings);



