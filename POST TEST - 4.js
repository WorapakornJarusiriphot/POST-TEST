document.getElementById("sortBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputString").value.trim().toLowerCase(); // รับค่า, ตัดช่องว่าง, แปลงเป็น lowercase

    if (!/^[a-z]+$/.test(inputText)) { // ตรวจสอบว่ามีแต่ตัวอักษรภาษาอังกฤษ
        document.getElementById("output").textContent = "Please enter valid English letters only.";
        return;
    }

    const sortedResult = sortAlphabetWithOrder(inputText);
    document.getElementById("output").textContent = sortedResult;
});

// ฟังก์ชันเรียงลำดับตัวอักษรพร้อมลำดับ
function sortAlphabetWithOrder(str) {
    const alphabetOrder = 'abcdefghijklmnopqrstuvwxyz';
    return str
        .split('') // แยกตัวอักษร
        .sort((a, b) => alphabetOrder.indexOf(a) - alphabetOrder.indexOf(b)) // เรียงตามลำดับ a-z
        .map(letter => `${alphabetOrder.indexOf(letter) + 1}${letter}`) // ใส่ลำดับก่อนตัวอักษร
        .join(''); // รวมกลับเป็นสตริง
}
