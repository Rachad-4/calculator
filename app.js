const displayScreen = document.querySelector(`#display`);
const soundBtn = document.querySelector("#sound");

let display = "";
let prev;
let cur = "";
let operator = ""; 
let firstEntry = true;
let btnSounds = true;

for (let i = 0; i < document.querySelectorAll(`.key`).length; i++){
    document.querySelectorAll(`.key`)[i].addEventListener(`click`,function () {
        makeSound(); 
        switch(this.innerHTML){
            case "-":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false; 
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";                    
                    break;
                }

            case "+":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false; 
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";                    
                    break;
                }

            case "*":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false; 
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";                    
                    break;
                }
    
            case "/":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false; 
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";                    
                    break;
                }
    
            case "AC":
                clear();
                break;
    
            case "+/-":
                cur *= -1;
                displayScreen.innerHTML = cur;
                break;
    
            case "%":
                cur /= 100;
                displayScreen.innerHTML = cur;
                break;
    
            default:
                console.log(this.innerHTML);
                cur += this.innerHTML;
                displayScreen.textContent = cur;
                console.log(cur);
        } 
    })
}

soundBtn.addEventListener(`click`, ()=>{
    btnSounds = !btnSounds;
    console.log(btnSounds);
})

function clear(){
    cur = "";
    prev = "";
    display = ""; 
    operator = "";
    firstEntry = true;
    displayScreen.textContent = display;
}

function operation(num1, operator, num2) {
    switch(operator){
        case "-":
            return num1 - num2;

        case "+":
            return parseFloat(num1) + parseFloat(num2);

        case "/":
            return parseFloat(num1) / parseFloat(num2);
            
        case "*":
            return parseFloat(num1) * parseFloat(num2);
        
         default:
            console.log("help");   
    }
}


function makeSound(){
    if (btnSounds){
        var click = new Audio("./sounds/click.mp3");
        click.play();
    } else {
        console.log("click");
    }
}

function displaySum(){
    display = sum;
    displayScreen.textContent = display;
    display = "";
}
