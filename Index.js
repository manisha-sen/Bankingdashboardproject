let balance = 0;

function updateBalance() {
    document.getElementById('balance').textContent = `$${balance.toFixed(2)}`;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert('Please enter a valid deposit amount.');
        return;
    }
    balance += depositAmount;
    updateBalance();
    document.getElementById('deposit-amount').value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert('Please enter a valid withdrawal amount.');
        return;
    }
    if (withdrawAmount > balance) {
        alert('Insufficient funds.');
        return;
    }
    balance -= withdrawAmount;
    updateBalance();
    document.getElementById('withdraw-amount').value = '';
}