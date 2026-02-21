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

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit +kmPerPoint) {
        console.log('Ok');
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12) {
            console.log('Points: ', points + '. License Suspended');
        } else {
            console.log('Points: ', points);
        }
    }
}

checkSpeed(71);