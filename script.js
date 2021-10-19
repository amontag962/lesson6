"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
// Проверка на число

// ------------------Игра "Угадай число"------------------

function guessTheNumber() {
  let guess = prompt("Угадай число которое я загадал");
  let num = 20;
  if (guess === null) {
    alert("Игра окончена!");
  } else if (!isNumber(guess)) {
    alert("Введите число");
    guessTheNumber();
  } else if (+guess > num) {
    alert("Загаданное число меньше, попробуй еще раз!");
    guessTheNumber();
  } else if (+guess < num) {
    alert("Загаданное число больше, попробуй еще раз!");
    guessTheNumber();
  } else if (+guess === num) {
    alert("Поздравляю, Вы угадали!");
  }
}

guessTheNumber();
