function maskCardNumber() {
    var cardNumber = document.getElementById("inputNumber").value;
    
    if (cardNumber.length !== 0 && cardNumber.length < 16) {
        alert("Card number should be 16 digits long.");
        return;
    }
    else if (cardNumber.length > 16) {
        alert('Card number should not exceed 16 digits.');
        return;
    }
    else if (cardNumber.length === 0) {
        alert("Please enter a 16-digit card number.");
        return;
    }
  
    var maskedCardNumber = cardNumber.substring(0, 4) + " **** **** " + cardNumber.substring(12);
    document.getElementById("cardNumber").innerHTML = 'Masked Card Number: ' + maskedCardNumber;
}

function unmaskCardNumber() {
    var cardNumber = document.getElementById("inputNumber").value;

    if (cardNumber.length !== 0 && cardNumber.length < 16) {
        alert("Card number should be 16 digits long.");
        return;
    }
    else if (cardNumber.length > 16) {
        alert('Card number should not exceed 16 digits.');
        return;
    }
    else if (cardNumber.length === 0) {
        alert("Please enter a 16-digit card number.");
        return;
    }
    
    var unmaskedCardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
    document.getElementById("cardNumber").innerHTML = 'Unmasked Card Number: ' + unmaskedCardNumber;
}

function clearOutput(){
    document.getElementById("inputNumber").value = "";
    document.getElementById("cardNumber").textContent = "";
}