function createTable() {
    let tab = document.getElementById("myTable");
    
    // Clear existing table
    tab.innerHTML = "";

    let inputRow = prompt("Input number of rows");
    let inputCol = prompt("Input number of columns");

    // Convert input to integers
    inputRow = parseInt(inputRow);
    inputCol = parseInt(inputCol);

    // Validate input
    if (isNaN(inputRow) || isNaN(inputCol) || inputRow <= 0 || inputCol <= 0) {
        alert("Invalid input! Please enter positive numbers for rows and columns.");
        return; // Exit function if invalid input
    }

    for (let i = 0; i < inputRow; i++) {
        let tabRow = document.createElement("tr");

        for (let j = 0; j < inputCol; j++) {
            let tabd = document.createElement("td");
            tabd.textContent = `Row-${i} Column-${j}`;
            tabd.style.border = "1px solid black"; 
            tabd.style.padding = "5px"; 
            tabRow.appendChild(tabd); 
        }

        tab.appendChild(tabRow); 
    }
}
