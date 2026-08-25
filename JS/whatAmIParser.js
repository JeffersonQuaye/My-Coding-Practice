const myVariable = "JavaScript";

function typeChecker(value) {
	const variableType = typeof value;
	console.log(`This variable is a ${variableType}.`);
}

typeChecker(myVariable);
typeChecker(42);
typeChecker(true);
