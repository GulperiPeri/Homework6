"use strict";
//1.
const populationOfBishkek = 2000000;
const populationOfNewBalykchy = 1000;
const populationDifference = populationOfBishkek - populationOfNewBalykchy;
console.log(populationDifference);

//2.
const yardLength = 50;
const yardWidth = 30;

const houseLength = 20;
const houseWidth = 10;

const squareOfYard = yardLength * yardWidth;
console.log(squareOfYard);

const squareOfTheHouse = houseLength * houseWidth;
console.log(squareOfTheHouse);

const fenceLength =
  yardLength + yardWidth + (yardLength - 20) + (yardWidth - 10);
console.log(fenceLength);

//3.
let num1 = +prompt("Please enter first number");
let num2 = +prompt("Pease enter second number");
if (num1 > num2) {
  let result = num1 + num2;
  alert(`Задача решена: ${result}`);
} else {
  let result = num1 - num2;
  alert(`Задача решена: ${result}`);
}

//4

//function dragonAge(n) {
// if (n < 100) {
/*   let dragonHead = n * 3;
    let dragonEyes = dragonHead * 2;
    console.log(${dragonHead}, ${dragonEyes});
  } else if (n = 100) {
    let dragonHead = ((n -1) * 3) + 2;
    let dragonEyes = dragonHead * 2;
    console.log(dragonHead, dragonEyes);
  }
}
dragonAge();*/

//5
let userAge = prompt("Сколько Вм лет?");
if (userAge > 17) {
  let education = prompt("В каком институте ты учишься?");
  alert("Хороший институт");
} else if (userAge < 17) {
  let education = prompt("В какой школе ты учишься?");
  alert("Неплохая школа");
} else {
  alert("До следующей встречи!");
}
