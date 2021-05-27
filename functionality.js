

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

generateGrid(16);

