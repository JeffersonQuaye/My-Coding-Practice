////    FUNCTIONS EXERCISE    ////

// Sum of Argument Exercise
console.log('Sum of Argument Exercise');
function sum(arrays) {
    if (arrays.lenght === 1 && Array.isArray(arrays[0])) {
        arrays = [...arrays[0]];
    }

    return arrays.reduce((a, b) => a + b);
}

console.log(sum([1, 2, 3, 4]));
console.log('\n');

//Area Of A Circle Exercise
console.log('Area Of A Circle Exercise')
let circle = {
    radius: 7,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

console.log(circle.area);
circle.radius = 10;
console.log(circle.area);
console.log('\n');

//Error Handling Exercise
console.log('Error Handling Exercise');
try {
    const numbers = [1, 2, 3, 4];
    const count = countOccurances(null, 1);
    console.log(count);
} catch (error) {
    console.log(error.message);
}

function countOccurances(array, searchElement) {
    if (!Array.isArray(array)) {
        throw new Error("This is not an array");
    }

    return array.reduce((accumulator, current) => {
        const occurance = (current === searchElement) ? 1 : 0;
        return accumulator + occurance;
    }, 0);
}