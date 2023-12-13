function calculate(number1, number2, operation) {
    var result = null;
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        case "%":
            result = number1 % number2;
            break;
        case "**":
            result = number1 ** number2;
            break;
        default:
            result = "Я такое не умею";
            break;
    }
    return result;
}

function inputNumber(){
    return parseInt(prompt("Введите число", "0"));
}

let operation = prompt(`Введите оператор(допускается ввод \ 
    + - сложение 
    * — умножение 
    / — деление 
    - — вычитание 
    % — остаток от деления 
    ** — возведение в степень`);

let number1 = inputNumber();
let number2 = inputNumber();
alert(calculate(number1,number2,operation));