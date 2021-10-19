"use strict";

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};
// Проверка на число

// ------------------Игра "Угадай число"------------------

function guessTheNumber(x) {
  function quesstion() {
    let guess = prompt("Угадай число которое я загадал");
    if (guess === null) {
      alert("Игра окончена!");
    } else if (!isNumber(guess)) {
      alert("Введите число");
      quesstion();
    } else if (+guess > x) {
      alert("Загаданное число меньше, попробуй еще раз!");
      quesstion();
    } else if (+guess < x) {
      alert("Загаданное число больше, попробуй еще раз!");
      quesstion();
    } else if (+guess === x) {
      alert("Поздравляю, Вы угадали!");
    }
  }
  quesstion();
}

guessTheNumber(5);
