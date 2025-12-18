const vowels = ["a", "e", "i", "o", "u"];
const btnCount = document.getElementById("btnCount");

const word = document.getElementById('word');

let count = 0;
const countVowels = (str) => {
    for(const letter of str.value.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    console.log(count);
    count = 0;
}


btnCount.addEventListener("click", () => {
    countVowels(word);
});
