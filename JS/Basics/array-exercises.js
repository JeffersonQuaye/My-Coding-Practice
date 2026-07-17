            //// ARRAY EXERCISES ////
//Array from Range Exercise
console.log('Array from range exercise')
const numbers = arrayFromRange(-10, -4)
console.log(numbers);

function arrayFromRange(min, max){
    const numbers = []
    for (let i = min; i <= max; i++) {
        numbers.push(i);
    }
    return numbers;
}
console.log('\n');

//Include Exercise
console.log('Include Exercise')
const numbers1 = [1, 2, 3, 4]
console.log(includes(numbers1, 1));

function includes(array, searchElement){
    for (let element of array) {
        if (element === searchElement) {
            return true;
        }
    return false;
    }
}
console.log('\n');

//Except Exercise
console.log('Except Exercise');
const numbers2 = [1, 2, 3, 4];
const output = except(numbers2, [2, 3]);
console.log(output);

function except(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            output.push(element);
        }
    return output;
    }
}
console.log('\n');

//Moving An Element Exercise
console.log('Moving An Element Exercise');
const numbers3 = [1, 2, 3, 4];
const output1 = move(numbers3, 0, 1);
console.log(output1);

function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output
}
console.log('\n');

//Count Occurances Exercise
console.log('Count Occurances Exercise');
const numbers4 = [1, 2, 3, 4, 1]
const count = countOccurances(numbers4, 2);
console.log(count);

function countOccurances(array, searchElement) {
    let count = 0;
    for (let element of array) {
        if (element === searchElement) {
            count++;
        }
        return count;
    }
}
console.log('\n');

//Get Max Exercise
console.log('Get Max Exercise');
const numbers5 = [1, 2, 3, 4];

const max = getMax(numbers5);
console.log(max);

function getMax(array){
    if (array.length === 0) {
        return undefined;
    };

    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    return max
    };

    return array.reduce((accumulator, current) => {
        return (current > accumulator) ? current : accumulator;
    })
}
console.log('\n');

//Movies Exercise
console.log('Movies Exercise');
const anime = [
    {title: 'Dragon Ball', year: 1999, rating: 4.5},
    {title: 'One Piece', year: 1999, rating: 4.8},
    {title: 'Naruto', year: 2003, rating: 3.9},
    {title: 'Bleach', year: 1999, rating: 4.7}
]

const title = anime
    .filter(m => m.year === 1999 && m.rating >= 4.0)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(title);