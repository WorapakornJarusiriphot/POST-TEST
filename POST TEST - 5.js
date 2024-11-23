function compareObjects() {
    const input = document.getElementById("objectInput").value;
    const resultElement = document.getElementById("result");

    try {
        // แปลง Input เป็น Array ของ Object
        const objects = input
            .trim()
            .split(/\n/) // แยกแต่ละบรรทัด
            .map((line) => eval(`(${line})`)); // ใช้ eval เพื่อแปลงเป็น Object

        // ตรวจสอบ Column ซ้ำ
        const columnValues = {};
        let hasDuplicateColumn = false;

        objects.forEach((obj) => {
            for (const key in obj) {
                if (!columnValues[key]) {
                    columnValues[key] = new Set();
                }
                if (columnValues[key].has(obj[key])) {
                    hasDuplicateColumn = true;
                }
                columnValues[key].add(obj[key]);
            }
        });

        // ตรวจสอบ Row ซ้ำ
        const rowSet = new Set();
        let hasDuplicateRow = false;

        objects.forEach((obj) => {
            const rowString = JSON.stringify(obj);
            if (rowSet.has(rowString)) {
                hasDuplicateRow = true;
            }
            rowSet.add(rowString);
        });

        // แสดงผลลัพธ์
        const columnResult = `Object Duplicate Column: ${hasDuplicateColumn ? "True" : "False"}`;
        const rowResult = `Object Duplicate Row: ${hasDuplicateRow ? "True" : "False"}`;
        console.log(columnResult);
        console.log(rowResult);
        resultElement.innerHTML = `<p>${columnResult}</p><p>${rowResult}</p>`;
    } catch (error) {
        console.error("Error:", error);
        resultElement.textContent = "Invalid Object format. Please check your input.";
    }
}
