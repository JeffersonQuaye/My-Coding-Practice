function calculateTip() {
    
    //get the input values
    const billAmount = parseFloat(document.getElementById('bill').value);
    const tipPercentage = parseFloat(document.getElementById('tip').value);

    //Calculate the tip and total amounts
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = tipAmount + billAmount;

    //display to the span element
    document.getElementById('tip-amount').textContent = '$' + tipAmount.toFixed(2);
    document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2);
}