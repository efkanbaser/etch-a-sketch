let myContainer = document.querySelector('#container');


function addSquare(){
    for(let i=0; i<256; i++) {
        let gridSquare = document.createElement('div')
        gridSquare.addEventListener("mouseenter", () => gridSquare.setAttribute("style", "background-color:blue;"))
        //gridSquare.addEventListener("mouseleave", () => gridSquare.setAttribute("style", "background-color:white;"))
        myContainer.appendChild(gridSquare)
        gridSquare.className = "square"
    }
}
addSquare()