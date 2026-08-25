function calculateTip(billAmount, tipPercentage) {
	const tipAmount = billAmount * (tipPercentage / 100);
	const totalBill = billAmount + tipAmount;

	console.log("Bill:", billAmount);
	console.log("Tip:", tipAmount);
	console.log("Total:", totalBill);

	return `Bill: $${billAmount}, Tip (${tipPercentage}%): $${tipAmount}, Total: $${totalBill}`;
}

console.log(calculateTip(50, 20));
