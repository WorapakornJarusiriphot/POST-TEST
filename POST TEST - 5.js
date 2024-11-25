function compareObjects() {
    const input = document.getElementById("objectInput").value;
    const resultElement = document.getElementById("result");

    try {
        const objects = input
            .trim()
            .split(/\n/)
            .map((line) => eval(`(${line})`));

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

        const rowSet = new Set();
        let hasDuplicateRow = false;

        objects.forEach((obj) => {
            const rowString = JSON.stringify(obj);
            if (rowSet.has(rowString)) {
                hasDuplicateRow = true;
            }
            rowSet.add(rowString);
        });

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
