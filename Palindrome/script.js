const palindromeInput = document.getElementById('palindrome-input');
const checkButton = document.getElementById('check-button');
const result = document.getElementById('result');

// validate
const validation = () => {
    if (palindromeInput.value === '') {
        result.innerText = "Please enter text!";
        result.classList.add('error');
        return false;
    }
    result.classList.remove('error');
    return true;
}

// palindrome function
const palindromeCheck = () => {
    const originalInput = palindromeInput.value;
    const cleanedInput = originalInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reverseInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reverseInput) {
        result.innerText = `Text ${originalInput} is palindrome!`;
        result.classList.add('success');
        result.classList.remove('error');
        palindromeInput.value = '';
    } else {
        result.innerText = `Text ${originalInput} is not palindrome!`;
        result.classList.remove('success');
        result.classList.add('error');
    }
};

const handleCheck = () => {
    if (!validation()) return;
    palindromeCheck();
}

// btn action
checkButton.addEventListener('click', handleCheck);

// enter key action
palindromeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleCheck();
    }
});
