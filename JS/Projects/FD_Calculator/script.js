function calculateFD(){
    const principle = parseFloat(document.getElementById('principle').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    const maturityAmount = principle + (principle * rate * time) / 100;

    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;


}

//Attach the event listener to calculator button
document.getElementById('calculateBtn').addEventListener('click', calculateFD);