let numberInput = document.getElementById('numberInput');
let fizzBuzzButton = document.getElementById('fizzBuzzButton');
let resultElement = document.getElementById('result');

const validateInput = (n) => {
    if (isNaN(n) || n < 1 || n > 20) {
        resultElement.textContent = "Please enter a number between 1 and 20.";
        return false;
    }
    return true;
}

fizzBuzzButton.addEventListener('click', function() {
    let number = parseInt(numberInput.value);

    if (validateInput(number)) {
        if (number % 3 === 0 && number % 5 === 0) {
            resultElement.textContent = "FizzBuzz";
        } else if (number % 3 === 0) {
            resultElement.textContent = "Fizz";
        } else if (number % 5 === 0) {
            resultElement.textContent = "Buzz";
        } else {
            resultElement.textContent = number;
        }
    }
});

numberInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        fizzBuzzButton.click();
    }
});
