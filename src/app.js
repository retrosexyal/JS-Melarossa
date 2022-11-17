// task 1
/* const firstName = prompt("Введите Ваше имя");
const lastName = prompt("Введите Вашу фамилию");
const nick = prompt("Введите Ваш никнейм");
if (firstName && lastName && nick) {
  alert(`Здравствуй ${lastName} ${firstName}`);
} else if (firstName && lastName && !nick) {
  alert(`Здравствуй ${lastName} ${firstName}`);
} else if (!firstName && lastName && nick) {
  alert(`Здравствуй ${nick}`);
} else if (firstName && !lastName && nick) {
  alert(`Здравствуй ${firstName}`);
} else if (!"" || (firstName && !lastName && !nick)) {
  alert(`Здравствуй Noname`);
} */

// task 2

/* const num = prompt("Введите любое число");
if (isNaN(num) || " ") {
  ru = /[а-я]/i;
  en = /[a-z]/i;
  if (num.match(ru)) {
    alert("Вы ввели чтото на русском языке");
  } else if (num.match(en)) {
    alert("Вы ввели чтото на английском языке");
  } else alert("Вы ввели не число");
} else {
  let odd,
    avr = "100",
    pos = "равно нулю",
    int;
  num > 100 ? (avr = "больше ста") : (avr = "меньше ста");
  num % 2 === 0 ? (odd = "четное") : (odd = "не четное");
  num > 0 ? (pos = "положительное") : (pos = "отрицательное");
  Number.isInteger(num) ? (int = "целое") : (int = "дробное");
  alert(`Введенное Вами число ${avr}, ${odd}, ${pos}, ${int}`);
} */

// task 3

/* const name = prompt("Введите имя пользователя");
const age = prompt("Введите сколько Вам лет");
age > 17
  ? alert(`Добро пожаловать ${name}`)
  : alert(`Простите, ${name}, доступ закрыт`); */

// task 4

/* const text = prompt("Введите цифры от 0 до 9");
if (isNaN(text)) {
  alert("вы ввели не число");
} else if (+text > 10) {
  alert("вы ввели число больше 10");
} else
  switch (text) {
    case "0":
      alert("ноль");
      break;

    case "1":
      alert("один");
      break;

    case "2":
      alert("два");
      break;

    case "3":
      alert("три");
      break;

    case "4":
      alert("четыре");
      break;

    case "5":
      alert("пять");
      break;

    case "6":
      alert("шесть");
      break;

    case "7":
      alert("семь");
      break;

    case "8":
      alert("восемь");
      break;

    case "9":
      alert("девять");
      break;

    default:
      alert("ваше число не отвечает условию задачи");
      break;
  }
 */