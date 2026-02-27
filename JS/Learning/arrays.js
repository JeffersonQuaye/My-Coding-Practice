//ADDING ELEMENTS TO AN ARRAY
console.log('ADDING ELEMENTS TO AN ARRAY');
const numbers = [3, 4];

//Adding to the end of an array
numbers.push(5, 6);
console.log(numbers);

//Adding to the beginning of an array
numbers.unshift(1, 2);
console.log(numbers);

//Adding to the middle of an array
numbers.splice(2, 0, 'a', 'b')
console.log(numbers);
console.log('-----------------------------');

//FINDING ELEMENTS IN AN ARRAY
console.log('FINDING ELEMENTS IN AN ARRAY');
const numbers2 = [1, 2, 3, 4, 2];
//Primitive types
console.log(numbers2.indexOf(1));
console.log(numbers2.lastIndexOf(2));
console.log(numbers2.indexOf(3) !== -1);
console.log(numbers2.includes(1));

//Reference types
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
console.log('-----------------------------');

//REMOVING ELEMENTS FROM AN ARRAY
console.log('REMOVING ELEMENTS FROM AN ARRAY');
const numbers3 = [1, 2, 3, 4];

//Removing from the end of an array
const last = numbers3.pop();
console.log(numbers3);
console.log(last);