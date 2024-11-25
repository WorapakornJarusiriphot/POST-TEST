document.getElementById("reverseBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputString").value;
    const reversedText = reverseString(inputText);
    document.getElementById("outputString").value = reversedText;
});

function reverseString(str) {
    return str.split('').reverse().join('');
}
