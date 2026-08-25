function evenOrOdd(number) {
	if (number % 2 === 0) {
		return `The number ${number} is even`;
	}

	return `The number ${number} is odd`;
}

console.log(evenOrOdd(10));
console.log(evenOrOdd(7));
console.log(evenOrOdd(24));
