const displayScreen = document.querySelector(`#display`);

let display = "";
let sum = 0;

for (let i = 0; i < document.querySelectorAll(`.key`).length; i++){
    document.querySelectorAll(`.key`)[i].addEventListener(`click`,function () {
        makeSound(); 

        switch(this.innerHTML){
            case "-":
                subtract();
                break;

            case "+":
                add(); 
                break;

            case "*":
                multiply();
                break;

            case "/":
                divide();
                break;

            case "AC":
                clear();
                break;

            case "+/-":
                console.log("make negative");
                break;

            case "%":
                console.log("make percent");
                break;

            default:
                display += this.innerHTML;
                displayScreen.textContent = display;
        }
    })
}

function clear(){
    sum = 0;
    display = ""; 
    displayScreen.textContent = display;
}

function add(){
    sum += parseFloat(display);
    displaySum();
}

function subtract(){
    sum -= parseFloat(display);
    displaySum();
}

function multiply(){
    sum *= parseFloat(display);
    displaySum();
}

function divide(){
    sum /= parseFloat(display);
    displaySum();
}

function makeSound(){
    var click = new Audio("./sounds/click.mp3");
    click.play();
}

function displaySum(){
    display = sum;
    displayScreen.textContent = display;
    display = "";
}