'use strict';

// Напиши скрипт со следующим функционалом:

//     При загрузке страницы пользователю предлагается в prompt ввести число.
//      Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
//     Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
//     После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива и записать ее в переменную total.
//     Используй цикл for или for...of. После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.

// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно.
// Если хочешь, в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз',
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

let userInput;
const numbers = [];
let total = 0;
do {
  userInput = prompt('Укажите число');

  if (userInput) {
    userInput = userInput.trim();
  }
  if (Number.isNaN(+userInput)) {
    alert('Было введено не число, попробуйте еще раз');
    continue;
  } else if (userInput === '' || userInput === null) {
    continue;
  } else {
    console.log(`что попало в userInput? --`, userInput);
    numbers.push(+userInput);
    console.log(`что попало в numbers? --`, numbers);
  }
} while (userInput !== null);

if (numbers.length) {
  for (const userNamber of numbers) {
    total += userNamber;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}

//===========================================================================================================================================================

// 2. Задание 2

// Напиши скрипт имитирующий авторизацию пользователя.

// Есть массив паролей зарегистрированных пользователей passwords.
// При посещении страницы, необходимо попросить пользователя ввести свой пароль, после чего проверить содержит ли массив passwords пароль введенный пользователем.
// Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attemptsLeft.

// 🔔 Используй цикл while или do...while

//     Если был введен пароль который есть в массиве passwords, вывести alert с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.
//     Если был введен не существующий пароль, отнять от лимита попыток единицу, вывести alert с текстом 'Неверный пароль, у вас осталось n попыток', где n это оставшееся количество попыток.
//     Если закончились попытки, вывести alert с текстом 'У вас закончились попытки, аккаунт заблокирован!'
//     Продолжать запрашивать пароль до тех пор, пока пользователь не введет существующий пароль, не кончатся попытки или пока пользователь не нажмет Cancel в prompt.

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attemptsLeft = 3;
let input;

while (attemptsLeft) {
  input = prompt('Введите пароль');
  attemptsLeft -= 1;
  if (input === null) {
    break;
  }
  if (passwords.includes(input)) {
    alert('Добро пожаловать!');
    break;
  }
  if (attemptsLeft) {
    alert(`Неверный пароль, у вас осталось ${attemptsLeft} попыток`);
  } else {
    alert('У вас закончились попытки, аккаунт заблокирован!');
  }
}
