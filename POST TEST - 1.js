document.getElementById("triangle-base").addEventListener("input", calculateTriangleArea);
document.getElementById("triangle-height").addEventListener("input", calculateTriangleArea);
function calculateTriangleArea() {
    const base = parseFloat(document.getElementById("triangle-base").value) || 0;
    const height = parseFloat(document.getElementById("triangle-height").value) || 0;
    const area = 0.5 * base * height;
    document.getElementById("triangle-result").textContent = area.toFixed(2);
}

document.getElementById("rectangle-width").addEventListener("input", calculateRectangleArea);
document.getElementById("rectangle-length").addEventListener("input", calculateRectangleArea);
function calculateRectangleArea() {
    const width = parseFloat(document.getElementById("rectangle-width").value) || 0;
    const length = parseFloat(document.getElementById("rectangle-length").value) || 0;
    const area = width * length;
    document.getElementById("rectangle-result").textContent = area.toFixed(2);
}

document.getElementById("circle-radius").addEventListener("input", calculateCircleArea);
function calculateCircleArea() {
    const radius = parseFloat(document.getElementById("circle-radius").value) || 0;
    const area = Math.PI * radius * radius;
    document.getElementById("circle-result").textContent = area.toFixed(2);
}

document.getElementById("circumference-radius").addEventListener("input", calculateCircumference);
function calculateCircumference() {
    const radius = parseFloat(document.getElementById("circumference-radius").value) || 0;
    const circumference = 2 * Math.PI * radius;
    document.getElementById("circumference-result").textContent = circumference.toFixed(2);
}

document.getElementById("trapezoid-a").addEventListener("input", calculateTrapezoidArea);
document.getElementById("trapezoid-b").addEventListener("input", calculateTrapezoidArea);
document.getElementById("trapezoid-height").addEventListener("input", calculateTrapezoidArea);
function calculateTrapezoidArea() {
    const a = parseFloat(document.getElementById("trapezoid-a").value) || 0;
    const b = parseFloat(document.getElementById("trapezoid-b").value) || 0;
    const height = parseFloat(document.getElementById("trapezoid-height").value) || 0;
    const area = 0.5 * (a + b) * height;
    document.getElementById("trapezoid-result").textContent = area.toFixed(2);
}
