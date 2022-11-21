// 1

/* let num1;
let num2;
do {
  num1 = +prompt("Введите первое число");
  num2 = +prompt("Введите второе число");
} while (
 Math.abs(num1 - num2) <= 5
);

if (num1 > num2) {
    while (num1 >= num2) {
        console.log(num1);
        num1--;
    }
} else {
    while (num2 >= num1) {
        console.log(num1);
        num1++;
    }
} */

// 2
/* 
const pin = 4242;
const puk = 1111;
let testPin;
let testPuk;
let count = 0;
let count2 = 0;

// function testing(code, testCode) {
//     test = +prompt(`введите ${code}`);
//     if (test === testCode) {
//       return alert(`вы ввели правильный ${code} код`);
//     }
//     return;
//   }
  

function testing(int, code, testCode) {
  if (int === testCode) {
    return alert(`вы ввели правильный ${code} код`);
  }
  return;
}

do {
  if (count < 3) {
    testPin = +prompt("введите pin");
    count++;
    testing(testPin, "пин", pin);
  } else {
    testPuk = +prompt("введите puk");
    testing(testPuk, "пук", puk);
    count2++;
    console.log(count2)
    if (count2 === 3) alert("ваша карта заблочена");
  }
} while (count2 < 3 && testPin !== pin && testPuk !== puk);

 */

// 3

/* const range = prompt("Введите диапозон чисел через знак '-'");

const arrRange = range.split("-").sort();
const newArr = [];

for (let i = +arrRange[0]; i <= arrRange[1]; i++) {
  newArr.push(i);
}

for (num of newArr) {
  let odd,
    avr = "100",
    pos = "равно нулю",
    int;
  num > 100 ? (avr = "больше ста") : (avr = "меньше ста");
  num % 2 === 0 ? (odd = "четное") : (odd = "не четное");
  num > 0 ? (pos = "положительное") : (pos = "отрицательное");
  Number.isInteger(num) ? (int = "целое") : (int = "дробное");
  console.log(`Введенное Вами число ${num} ${avr}, ${odd}, ${pos}, ${int}`);
}
 */

//4

/* for (let i = 0; i < 7; i++){
    
} */