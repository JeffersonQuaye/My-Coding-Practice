//ADDING ELEMENTS TO AN ARRAY
console.log('ADDING ELEMENTS TO AN ARRAY');
const numbers = [3, 4];

//Adding to the end of an array
console.log('adding to the end of an array');
numbers.push(5, 6);
console.log(numbers);

//Adding to the beginning of an array
console.log('adding to the beginning of an array');
numbers.unshift(1, 2);
console.log(numbers);

//Adding to the middle of an array
console.log('adding to the middle of an array');
numbers.splice(2, 0, 'a', 'b')
console.log(numbers);
console.log('-----------------------------\n');


//FINDING ELEMENTS IN AN ARRAY
console.log('FINDING ELEMENTS IN AN ARRAY');
const numbers2 = [1, 2, 3, 4, 2];

//Primitive types
console.log('finding primitive types');
console.log(numbers2.indexOf(1));
console.log(numbers2.lastIndexOf(2));
console.log(numbers2.indexOf(3) !== -1);
console.log(numbers2.includes(1));

//Reference types
console.log('finding reference types');
const courses = [
    {id : 1, name: 'a'},
    {id : 2, name: 'b'},
    {id : 3, name: 'c'},
    {id : 4, name: 'd'},
    {id : 5, name: 'e'},
];

const course = courses.findIndex(function(course){
    return course.name === 'a';
})

console.log(course);
console.log('-----------------------------\n');

//REMOVING ELEMENTS FROM AN ARRAY
console.log('REMOVING ELEMENTS FROM AN ARRAY');
const numbers3 = [1, 2, 3, 4];

// Removing from the end of an array
console.log('removing from the end of an array');
const last = numbers3.pop();
console.log(numbers3);
console.log(last);

//Removing from the beginning of an array
console.log('removing from the beginning of an array');
const first = numbers3.shift();
console.log(numbers3);
console.log(first);

//Removing from the middle of an array
console.log('removing from the middle of an array');
numbers3.splice(1, 1);
console.log(numbers3);
console.log('-----------------------------\n');

//EMPTYING AN ARRAY
console.log('EMPTYING AN ARRAY');
let numbers4 = [1, 2, 3, 4];
let another = numbers4;

//solution 1 reassigning to a new array
console.log('solution 1 reassigning to a new array');
numbers4 = [];
console.log(numbers4);
console.log(another);

//solution 2 setting the length to 0
console.log('solution 2 setting the length to 0');
numbers4.length = 0;
console.log(numbers4);
console.log(another);

//solution 3 using splice method
console.log('solution 3 using splice method');
numbers4.splice(0, numbers4.length);
console.log(numbers4);
console.log(another);

//solution 4 using pop method in a loop
console.log('solution 4 using pop method in a loop');
while(numbers4.length > 0){
    numbers4.pop();
}
console.log(numbers4);
console.log(another);
console.log('-----------------------------\n');

//COMBINING AND SLICING ARRAYS
console.log('COMBINING AND SLICING ARRAYS');
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

//combining arrays using concat
console.log('combining arrays using concat');
const combined = firstArray.concat(secondArray);
console.log(combined);

//combining arrays using the spread operator
console.log('combining arrays using the spread operator');
const combined2 = [...firstArray,...secondArray];
console.log(combined2)

//Slicing an array
console.log('slicing an array');
const sliced = combined.slice(2, 4);
console.log(sliced);
console.log('-----------------------------\n');

//ITERATING AN ARRAY
console.log('ITERATING AN ARRAY')
const numbers5 = [1, 2, 3];
for (const number of numbers5) {
    console.log(number);
}
console.log('-----------------------------\n');

//JOINING AN ARRAY
console.log('JOINING AN ARRAY')
const numbers6 = [1, 2, 3];
const joined = numbers6.join('')
console.log(joined);
console.log('-----------------------------\n')

//SORTING AN ARRAY
console.log('SORTING AN ARRAY')

//sorting primitive types
console.log('sorting primitive types');
const numbers7 = [2, 3, 1]
numbers7.sort();
console.log(numbers7);
numbers7.reverse();
console.log(numbers7);

//sorting objects
console.log('sorting objects');
const courses2 = [
    {id: 1, name: 'Node.js'},  
    {id: 2, name: 'Javascript'}
]
courses2.sort(function(a, b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0
});

console.log(courses2)
console.log('----------------------------\n')

//ARRAY TESTING
console.log('ARRAY TESTING')
const numbers8 = [1, 2, 3]

const allPositive = numbers8.every(function(value){
    return value >= 0;
})

console.log(allPositive);
console.log('--------------------------\n')

//FILTERING AN ARRAY
console.log('FILTERING AN ARRAY');
const numbers9 = [1, -1, 2, 3]
const filtered = numbers9.filter(value => value >= 0);

console.log(filtered);
console.log('--------------------------\n')

//MAPPING AN ARRAY
console.log('MAPPING AN ARRAY')
const numbers10 = [1, -1, 2, 3]
const items = numbers10.map(function(n) {
    const obj ={ value: n }
    return obj
});

console.log(items);
console.log('--------------------------\n')

//REDUCING AN ARRAY
console.log('REDUCING AN ARRAY')
const numbers11 = [1, -1, 2, 3]
let sum = 0;
for (let n of numbers11) {
    sum += n;
}
console.log(sum)

const sum1 = numbers11.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)
console.log(sum1);