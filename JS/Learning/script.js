                            //EXERCISES FOR JAVASCRIPT FUNDAMENTALS


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

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

showProperties(movie);

function showProperties(obj) {
    for (const key in obj) {
        if (typeof obj[key] === "string") {
            console.log(key, obj[key]);
        }
    }
}