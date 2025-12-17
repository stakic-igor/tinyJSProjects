const inputString = document.getElementById('inputString');
const result = document.getElementById('result');
const overlay = document.querySelector('.overlay');
const tryAgain = document.getElementById('tryAgain');

const maxLength = 20;

const countCharacters = () => {
    const currentLength = inputString.value.length;
    if (currentLength >= maxLength) {
        overlay.classList.remove('hidden');
        inputString.disabled = true;
    }
}

inputString.addEventListener('input', () => {
    result.textContent = inputString.value.split('').reverse().join('');
    countCharacters();
});

tryAgain.addEventListener('click', () => {
    overlay.classList.add('hidden');
    inputString.value = '';
    result.textContent = '';
    inputString.disabled = false;
    inputString.focus();
});
