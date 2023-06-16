function validateCardNumber() {
    var cardNumber = document.getElementById("cardNumber").value;
    var sum = 0;
    var isEven = false;

    for (var i = cardNumber.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i), 10);

      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }

      sum += digit;
      isEven = !isEven;
    }

    if (sum % 10 !== 0) {
      alert("Invalid card number. Please check again.");
      return false;
    }

    return true;
  }

  document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateCardNumber()) {
      event.preventDefault();
    }
  });