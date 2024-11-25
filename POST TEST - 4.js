document.getElementById("sortBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputString").value.trim().toLowerCase();

    if (!/^[a-z]+$/.test(inputText)) {
        document.getElementById("output").textContent = "Please enter valid English letters only.";
        return;
    }

    const sortedResult = sortAlphabetWithOrder(inputText);
    document.getElementById("output").textContent = sortedResult;
});

function sortAlphabetWithOrder(str) {
    const alphabetOrder = 'abcdefghijklmnopqrstuvwxyz';
    return str
        .split('')
        .sort((a, b) => alphabetOrder.indexOf(a) - alphabetOrder.indexOf(b))
        .map(letter => `${alphabetOrder.indexOf(letter) + 1}${letter}`)
        .join('');
}
