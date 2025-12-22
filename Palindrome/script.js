const palindromeInput = document.getElementById('palindrome-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

// validation

// palindrome function
const checkPalindrome = () => {
    const original = palindromeInput.value;
    const reverse = palindromeInput.value.split('').reverse().join('');
    if (original === reverse) {
         result.innerText = `The ${original} is palindrome!`
    } else {
        result.innerText = `The ${original} is NOT palindrome!`
    }
}

// button action
checkButton.addEventListener('click', () => {
    checkPalindrome();
})
