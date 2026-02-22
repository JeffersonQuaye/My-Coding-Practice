                            //EXERCISES FOR JAVASCRIPT FUNDAMENTALS

//FIZZBUZZ EXERCISE
// function fizzbuzz(input) {
//     if (typeof input !== 'number') {
//         return NaN;
//     }else if ((input % 3 === 0) && (input % 5 === 0)) {
//         return 'FizzBuzz';
//     } else if (input % 3 === 0) {
//         return 'Fizz';
//     } else if (input % 5 === 0) {
//         return 'Buzz';
//     } else {
//         return input;
//     }
// }

// const output = fizzbuzz(false);
// console.log(output);


//DEMERIT POINT EXERCISE
// function checkSpeed(speed) {
//     const speedLimit = 70;
//     const kmPerPoint = 5;

//     if (speed <= speedLimit +kmPerPoint) {
//         console.log('Ok');
//     } else {
//         const points = Math.floor((speed - speedLimit) / kmPerPoint);
//         if (points >= 12) {
//             console.log('Points: ', points + '. License Suspended');
//         } else {
//             console.log('Points: ', points);
//         }
//     }
// }

// checkSpeed(200);


//EVEN AND ODD EXERCISE
// function showNumber(limits) {
//     for (let x = 0; x <= limits; x++) {
//         if (x % 2 === 0) {
//             console.log(x, 'EVEN');
//         } else {
//             console.log(x, 'ODD');
//         }        
//     }
// }

// showNumber(20);


//TRUTHY COUNT EXERCISE
// const array = [1, 2, 3, 4, 5, 0, '', null, undefined, false];

// console.log(countTruthy(array));

// function countTruthy(array) {
//     let count = 0;
//     for (let value of array) {
//         if (value) {
//             count++;
//         }
//     }
//     return count;
// }


//STRING COUNT EXERCISE
// const movie = {
//     title: 'a',
//     releaseYear: 2018,
//     rating: 4.5,
//     director: 'b'
// };

// showProperties(movie);

// function showProperties(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === "string") {
//             console.log(key, obj[key]);
//         }
//     }
// }


//SUM OF MULTIPLES EXERCISE
// console.log(sum(10));

// function sum(limits) {
//     let sumOfMultiples = 0;
//     for (let x = 0; x <= limits; x++) {
//         if (x % 3 === 0 || x % 5 === 0) {
//             sumOfMultiples += x;
//         }
//     }
//     return sumOfMultiples;
// }


//GRADE CALCULATOR EXERCISE
const marks = [90, 85, 99];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    let average = sum / marks.length;
    if (average >= 90 && average <= 100) {
        return average + ' A';
    } else if (average >= 80 && average <= 89) {
        return average + ' B';
    } else if (average >= 70 && average <= 79) {
        return average + ' C';
    } else if (average >= 60 && average <= 69) {
        return average + ' D';
    } else {
        return average + ' F';
    }

}