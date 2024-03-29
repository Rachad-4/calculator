const displayScreen = document.querySelector(`#display`);
const soundBtn = document.querySelector("#sound");

let display = "";
let prev;
let cur = "";
let operator = ""; 
let firstEntry = true;
let btnSounds = true;
let isDecimal = false;
let lastEntry = ""; 

for (let i = 0; i < document.querySelectorAll(`.key`).length; i++){
    document.querySelectorAll(`.key`)[i].addEventListener(`click`,function () {
        makeSound(); 
        if (lastEntry == "=" && !isNaN(this.innerHTML)){
            clear();
        };

        switch(this.innerHTML){
            case "-":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false;
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = ""; 
                    isDecimal = false 
                    break;
                }

            case "+":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "+";
                    firstEntry = false; 
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";    
                    isDecimal = false                
                    break;
                }

            case "*":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "*";
                    firstEntry = false; 
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";       
                    isDecimal = false             
                    break;
                }
    
            case "/":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "/";
                    firstEntry = false; 
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = this.innerHTML;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";   
                    isDecimal = false                 
                    break;
                }
    
            case "AC":
                clear();
                break;
    
            case "+/-":
                cur *= -1;
                displayScreen.innerHTML = cur;
                break;
    
            case "=":
                if (prev && cur){
                    cur = operation(prev,operator,cur);
                    displayScreen.innerHTML = cur; 
                    isDecimal = false
                    firstEntry = true; 
                    lastEntry = "=";
                    break;
                } else {
                    break;
                }
                

            case "%":
                isDecimal = true;
                cur /= 100;
                displayScreen.innerHTML = cur;
                break;
                
            case ".":
                if (isDecimal == false){
                    isDecimal = true;
                }else {
                    break;
                }

            default:
                if (cur.length < 25){
                    cur += this.innerHTML;
                    displayScreen.textContent = cur;
                }      
        } 
    })
}

document.addEventListener(`keydown`, function(event){

    console.log(event.key);

    if (event.key >= 0 && event.key <= 9) {
        if (cur.length < 25){
            cur += event.key;
            displayScreen.textContent = cur;
        } 
    } else {
        switch(event.key){
            case "-":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "-";
                    firstEntry = false;
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = event.key;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = ""; 
                    isDecimal = false 
                    break;
                }

            case "+":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "+";
                    firstEntry = false; 
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = event.key;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";    
                    isDecimal = false                
                    break;
                }

            case "*":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "*";
                    firstEntry = false; 
                    isDecimal = false;
                    break; 
                }else {
                    cur = operation(prev,operator,cur);
                    operator = event.key
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";       
                    isDecimal = false             
                    break;
                }
    
            case "/":
                if (firstEntry){
                    prev = cur; 
                    cur = "";
                    operator = "/";
                    firstEntry = false; 
                    isDecimal = false;
                    break;
                }else {
                    cur = operation(prev,operator,cur);
                    operator = event.key;
                    displayScreen.innerHTML = cur;
                    prev = cur;
                    cur = "";   
                    isDecimal = false                 
                    break;
                }
    
            case "AC":
                clear();
                break;
    
            case "+/-":
                cur *= -1;
                displayScreen.innerHTML = cur;
                break;
    
            case "=":
                cur = operation(prev,operator,cur);
                displayScreen.innerHTML = cur; 
                isDecimal = false
                firstEntry = true; 
                break;

            case "=":
                cur = operation(prev,operator,cur);
                displayScreen.innerHTML = cur; 
                isDecimal = false
                firstEntry = true; 
                break;

            case "Enter":
                cur = operation(prev,operator,cur);
                displayScreen.innerHTML = cur; 
                isDecimal = false
                firstEntry = true; 
                break;

            case "%":
                isDecimal = true;
                cur /= 100;
                displayScreen.innerHTML = cur;
                break;
                
            case ".":
                if (isDecimal == false){
                    isDecimal = true;
                }else {
                    break;
                }

            default:
                if (cur.length < 25 && isNaN(parseInt(cur))){
                    cur += event.key;
                    displayScreen.textContent = cur;
                }      
        } 
    }
})

soundBtn.addEventListener(`click`, ()=>{
    btnSounds = !btnSounds;
})

function clear(){
    cur = "";
    prev = "";
    display = ""; 
    operator = "";
    firstEntry = true;
    isDecimal = false;
    lastEntry = "";
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
