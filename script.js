"use strict";

// Игра "Угадай число"

function guessTheNumber() {
  let guess = +prompt("Угадай число которое я загадал");

  let num = 20;

  if (guess > num) {
    alert("Загаданное число меньше, попробуй еще раз!");
    guessTheNumber();
  } else if (guess < num) {
    alert("Загаданное число больше, попробуй еще раз!");
    guessTheNumber();
  } else if (guess === num) {
    alert("Поздравляю, Вы угадали!");
  }
}

guessTheNumber();
