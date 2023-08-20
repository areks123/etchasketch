document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("gridContainer");

    for (let i = 0; i < 256; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        cell.addEventListener("mouseover", function() {
            cell.classList.add("cell-colored");
        });

                gridContainer.appendChild(cell);

    }
});