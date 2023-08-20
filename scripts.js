document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
});