const jsonData = {
    "name": "Hogwarts",
    "students": [
        { "fname": "Harry", "lname": "Potter", "houses": "Gryffindor", "age": "15", "class": "3" },
        { "fname": "Hermione", "lname": "Granger", "houses": "Gryffindor", "age": "15", "class": "3" },
        { "fname": "Ronald", "lname": "Weasley", "houses": "Ravenclaw", "age": "15", "class": "3" },
        { "fname": "Draco", "lname": "Malfoy", "houses": "Slytherin", "age": "16", "class": "4" },
        { "fname": "Teddy", "lname": "Lupin", "houses": "Hufflepuff", "age": "17", "class": "5" },
        { "fname": "Susan", "lname": "Bones", "houses": "Hufflepuff", "age": "14", "class": "2" },
        { "fname": "Severus", "lname": "Snape", "houses": "Slytherin", "age": "18", "class": "6" },
        { "fname": "Albus", "lname": "Dumbledore", "houses": "Ravenclaw", "age": "18", "class": "6" },
        { "fname": "Neville", "lname": "Longbottom", "houses": "Gryffindor", "age": "17", "class": "6" }
    ],
    "house": ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]
};

// Populate house options
const houseSelect = document.getElementById('house-select');
jsonData.house.forEach(house => {
    const option = document.createElement('option');
    option.value = house;
    option.textContent = house;
    houseSelect.appendChild(option);
});

// Display students in table
const studentTableBody = document.querySelector('#student-table tbody');
function displayStudents(students) {
    studentTableBody.innerHTML = '';
    students.forEach(student => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${student.fname}</td>
            <td>${student.lname}</td>
            <td>${student.houses}</td>
            <td>${student.age}</td>
            <td>${student.class}</td>
        `;
        studentTableBody.appendChild(row);
    });
}

// Filter students by house
houseSelect.addEventListener('change', () => {
    const selectedHouse = houseSelect.value;
    if (selectedHouse === 'All') {
        displayStudents(jsonData.students);
    } else {
        const filteredStudents = jsonData.students.filter(student => student.houses === selectedHouse);
        displayStudents(filteredStudents);
    }
});

// Clear table
document.getElementById('clear-btn').addEventListener('click', () => {
    studentTableBody.innerHTML = '';
});

// Refresh table
document.getElementById('refresh-btn').addEventListener('click', () => {
    displayStudents(jsonData.students);
});

// Initial display
displayStudents(jsonData.students);
