let mainNumber = 10369;

let number5 = mainNumber % 10;
mainNumber = (mainNumber - number5) / 10;
let number4 = mainNumber % 10;
mainNumber = (mainNumber - number4) / 10;
let number3 = mainNumber % 10;
mainNumber = (mainNumber - number3) / 10;
let number2 = mainNumber % 10;
mainNumber = (mainNumber - number2) / 10;
let number1 = mainNumber % 10;

console.log(number1, number2, number3, number4, number5);
