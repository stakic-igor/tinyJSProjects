const palindromeInput = document.getElementById('palindrome-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');
const rgx = /[a-zA-Z0-9]+/g

// validation
const validation = () => {
    if (palindromeInput.value === '') {
        result.innerText = "Please enter text";
        return false;
    }
    if(rgx.test(palindromeInput.value)) {
        result.innerText = "Input can contain letters and digits only!"
        return false;
    }
    return true;
}

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
    if(!validation()) return;
    checkPalindrome();
})
