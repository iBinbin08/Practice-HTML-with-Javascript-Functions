function maskCardNumber() {
    var cardNumber = document.getElementById("inputNumber").value;
    
    if (!validateCardNumber(cardNumber)) {
        return;
    }

    var maskedCardNumber = cardNumber.substring(0, 4) + " **** **** " + cardNumber.substring(12);
    document.getElementById("cardNumber").innerHTML = 'Masked Card Number: ' + maskedCardNumber;
}

function unmaskCardNumber() {
    var cardNumber = document.getElementById("inputNumber").value;

    if (!validateCardNumber(cardNumber)) {
        return;
    }

    var unmaskedCardNumber = cardNumber.replace(/(.{4})/g, "$1 ");
    document.getElementById("cardNumber").innerHTML = 'Unmasked Card Number: ' + unmaskedCardNumber;
}

function validateCardNumber(cardNumber) {
    if (cardNumber.length !== 0 && cardNumber.length < 16) {
        alert("Card number should be 16 digits long.");
        return false;
    }
    else if (cardNumber.length > 16) {
        alert('Card number should not exceed 16 digits.');
        return false;
    }
    else if (cardNumber.length === 0) {
        alert("Please enter a 16-digit card number.");
        return false;
    }

    return true;
  }

function clearOutput(){
    document.getElementById("inputNumber").value = "";
    document.getElementById("cardNumber").textContent = "";
}