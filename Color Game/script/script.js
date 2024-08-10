let numSquare = 6;
let colors = generateRamdonColors(numSquare);
let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();

let messageDisplay = document.querySelector("#message");
let resetButtom = document.getElementById("reset");
let modeButtons = document.querySelectorAll(".mode");
let stripe = document.getElementById("stripe");


function init(){
    setupSquares();
    reset();
    stripe.classList.add("bar"); 
}

//SetupModeButton function
function start(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Facil" ? numSquare = 3 : numSquare = 6;
            init();
        });
    }
}

//SetupSquares function
function setupSquares() {
    for (let i = 0; i < colors.length; i++) {
        squares[i].addEventListener("click", function(){
            if (messageDisplay.textContent === "Correcto!!!!") return;

            let clickedColor = this.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correcto!!!!";
                resetButtom.textContent = "Volver a Jugar?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                messageDisplay.style.color = clickedColor;
                disableSquares();
            }

            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Intentalo de Nuevo!!";
            }
        });
    }
}

//Reset Button to Reset the Colors
resetButtom.addEventListener("click", function(){
    colors = generateRamdonColors(numSquare);

    pickedColor = pickColor();

    for (let i = 0; i <colors.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }

    h1.style.backgroundColor = "steelblue";

    messageDisplay.textContent = "";

    this.textContent = "Nuevos Colores";
    
});

function reset() {
    colors = generateRamdonColors(numSquare);

    pickedColor = pickColor();

    resetButtom.textContent = "Nuevos Colores";

    messageDisplay.textContent = "";

    for (let i =0; i < squares.length; i++) {
        if (colors[i]!=null) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }

        else{
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}

function changeColor() {
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = colors;
    }
}

function pickColor() {
    let ramdon = Math.floor(Math.random() * colors.length);
    return colors[ramdon];
}

function generateRamdonColors(num){
    let arr = [];

    for (let i = 0; i < num ; i++) {
        arr.push(ramdonColor());
    }

    return arr;
}

function ramdonColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function disableSquares() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].removeEventListener("click", handleSquareClick); // Disable click events
    }
}

start();