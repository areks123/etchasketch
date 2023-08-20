document.addEventListener("DOMContentLoaded", function () {
    const gridContainer = document.getElementById("gridContainer");
    const resizeButton = document.getElementById("resizeGrid")

    function createGrid(squaresPerSide) {

        const gridSize = gridContainer.offsetWidth

        gridContainer.innerHTML = ' ';
        gridContainer.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${gridSize / squaresPerSide}px`;
            cell.style.height = `${gridSize / squaresPerSide}px`;

            cell.addEventListener("mouseover", function () {
                cell.classList.add("cell-colored");
            });

            gridContainer.appendChild(cell);

        }
    }

    resizeButton.addEventListener("click", function () {
        let squaresPerSide = parseInt(prompt("Enter the number of squares per side (1-50):"))
        if (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 50) {
            alert("Please enter a valid number between 1 and 50.");
            return;
        }

        createGrid(squaresPerSide);
    })

    createGrid(16);
});