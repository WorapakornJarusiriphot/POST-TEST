document.getElementById("reverseBtn").addEventListener("click", () => {
    const inputText = document.getElementById("inputString").value; // รับค่าจากช่อง input
    const reversedText = reverseString(inputText); // เรียกใช้ฟังก์ชัน reverse
    document.getElementById("outputString").value = reversedText; // แสดงผลในช่อง readonly
});

// ฟังก์ชันสำหรับกลับตัวอักษร
function reverseString(str) {
    return str.split('').reverse().join(''); // แยกตัวอักษร -> กลับลำดับ -> รวมกลับเป็นสตริง
}
