let myContainer = document.querySelector('#container')
let btn = document.getElementById('grid')
btn.addEventListener('click', changeSize)
addTable(16)

function changeSize(){
    newGrid = window.prompt("Choose the size of the grid between 1 and 100 pixels.")
    while(newGrid > 101 || newGrid < 1){
        newGrid = window.prompt("Choose the size of the grid between 1 and 100 pixels.") 
    }
    removeTable()
    addTable(newGrid)
}

function addTable(size){
    for(let i=0; i<size; i++){
        let gridRow = document.createElement('div')
        myContainer.appendChild(gridRow)
        gridRow.className = "row"
        for(let j=0; j<size; j++) {
            let gridSquare = document.createElement('div')
            gridSquare.addEventListener("mouseover", () => gridSquare.setAttribute("style", "background-color:blue;"))
            //gridSquare.addEventListener("mouseleave", () => gridSquare.setAttribute("style", "background-color:white;"))
            gridRow.appendChild(gridSquare)
            gridSquare.className = "square"
            }
    }
}

function removeTable(){
    myContainer.innerHTML = ""
}


