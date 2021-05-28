// THIS IS THE DEFAULT WHEN YOU RELOAD THE PAGE OR ENTER FOR THE FIRST TIME.
const gridContainer = document.querySelector('#grid-container');

function generateGrid(squares) {
    for(let i = 0; i < squares; i++)
    {
        for(let j = 0; j < squares; j++)
        {
            const newDiv = document.createElement('div');
            newDiv.classList.add("grid-element");
            gridContainer.appendChild(newDiv);
        }
    }
}

function addColors() {
    const gridElements = document.querySelectorAll('.grid-element');

    gridElements.forEach(element => element.addEventListener('mouseenter', changeColor));

    function changeColor(e) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = '#' + randomColor;
    }
}

generateGrid(16);
addColors();



// ---------------------CHANGE SIZE FUNC ---------------------
const buttonChangeSize = document.querySelector("#change-button");

buttonChangeSize.addEventListener('click', changeSize);

function changeSize() {

    let wantedSize = parseInt(prompt("How many squares per row and column do you want? (MIN: 5 - MAX: 64)"));

    (wantedSize < 5 || wantedSize > 64 || !wantedSize) ? wantedSize = 16 : wantedSize; 

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    gridContainer.style.gridTemplateRows = "repeat("+wantedSize+", 1fr)";
    gridContainer.style.gridTemplateColumns = "repeat("+wantedSize+", 1fr)";

    generateGrid(wantedSize);
    addColors();
}


// --------------------- ERASER FUNC -------------------------
const buttonErase = document.querySelector("#eraser-button");

buttonErase.addEventListener('click', toggleEraser);

let toggle = true;

function toggleEraser() {
    if(toggle) {
        const gridElements = document.querySelectorAll('.grid-element');

        gridElements.forEach(element => element.addEventListener('mouseenter', erase));

        function erase(e) {
            this.style.backgroundColor = 'white';
        }
        toggle = false;
    } else {
        const gridElements = document.querySelectorAll('.grid-element');

        gridElements.forEach(element => element.addEventListener('mouseenter', changeColor));

        function changeColor(e) {
            let randomColor = Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor = '#' + randomColor;
        }
        toggle = true;
    }
}
