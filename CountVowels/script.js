const vowels = ["a", "e", "i", "o", "u"];
const btnCount = document.getElementById("btn-count");
const userWord = document.getElementById('user-word');
const result = document.getElementById('result');

const validate = (str) => {
    if(str.trim() === '') {
        return 'Please enter a word or phrase';
    }     return null;
}

const countVowels = (str) => {
    let count = 0;
    for(const letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count;
}

btnCount.addEventListener("click", () => {
    const errorMessage = validate(userWord.value);
    
    
    const vowelCount = countVowels(userWord.value);
    result.textContent = `Your vowels count is: ${vowelCount}`;
});
