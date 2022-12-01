//1
function randomArrayGenerator(interval, lastNumber) {
  const arr = [];
  for (let i = 0; i < interval; i++) {
    arr.push(Math.floor(Math.random() * (lastNumber + 1)));
  }
  return arr;
}

console.log(randomArrayGenerator(10, 5));

//2

function arraySplicer(arr, str) {
  return arr.filter((e) => e.toUpperCase() !== str.toUpperCase());
}

console.log(arraySplicer(["sex", "drugs", "rock and roll"], "drugs"));

//3

function createArray() {
  const arr = [];
  for (let i = 0; i < 4; i++) {
    let item = prompt("введите то, что хотите поместить в массив");
    if (!isNaN(+item)) {
      arr.push(+item);
    } else if (item[0] === "[" && item[item.length - 1] === "]") {
      arr.push(item.slice(1, -1).split(","));
    } else if (item[0] === "{" && item[item.length - 1] === "}") {
      const obj = {};
      item
        .slice(1, -1)
        .split(",")
        .map((e) => {
          obj[e.split(":")[0]] = e.split(":")[1];
        });
      arr.push(obj);
    }
  }
  return arr;
}

//4

function arrOfNamesAndAges(arr) {
  return arr
    .map((e) => {
      const newObj = {
        name: e.name,
        surname: e.surname,
        age: e.age,
      };
      return newObj;
    })
    .sort((a, b) => {
      if (a.surname > b.surname) {
        return 1;
      } else if (a.surname < b.surname) {
        return -1;
      } else {
        return 0;
      }
    });
}

function arrOfMaxPropertys(arr) {
  const newArr = []; // через map() не получилось без массива т.к. undefined заполняло
  arr.forEach((e) => {
    if (Object.keys(e).length > 7) {
      newArr.push(e);
    }
  });
  return newArr.sort((a, b) => {
    if (Object.keys(a).length > Object.keys(b).length) {
      return 1;
    } else if (Object.keys(a).length < Object.keys(b).length) {
      return -1;
    } else return 0;
  });
}

function sortForName(arr) {
  return arr.sort((a, b) => a.age - b.age);
}

function sorForZodiac(arr) {
  const newArr = [];
  arr.forEach((e) => {
    if (e.zodiacSign !== undefined) {
      newArr.push(e);
    }
  });
  return newArr;
}

function sortArrForPropertysArrOrObj(arr) {
  return arr.sort((a, b) => {
    const arrValuesA = Object.values(a);
    const arrValuesB = Object.values(b);
    let statusA = 0;
    let statusB = 0;
    arrValuesA.forEach((e) => {
      if (typeof e === "object") {
        statusA = 1;
      }
    });
    arrValuesB.forEach((e) => {
      if (typeof e === "object") {
        statusB = 1;
      }
    });
    if (statusA > statusB) {
      return -1;
    } else if (statusA < statusB) {
      return;
    }
  });
}

function addId(arr) {
  let arrID = [];
  return arr.map((e) => {
    for (; arrID.length !== arr.length; ) {
      let random = Math.floor(Math.random() * 100);

      if (!arrID.includes(random)) {
        arrID.push(random);
      }
    }

    e.id = arrID.pop();
    return e;
  });
}

function arrOfFictional(arr) {
  const newArr = [];
  arr.forEach((e) => {
    if (e.isFictionalCharacter === true) {
      e.fictionalUniverse = null;
      newArr.push(e);
    }
  });
  return newArr;
}

const arrayOfPersons = [
  {
    name: "Ferdinant",
    surname: "Foch",
    age: 54,
    nationality: "French",
    skill: "Military management",
    zodiacSign: undefined,
    height: 173,
    isAlive: false,
  },
  {
    name: "Jackson",
    surname: "Bricks",
    age: 20,
    nationality: "USA",
    skill: "farmer",
    height: 187,
    specialTrait: "mechanical arms",
    isFictionalCharacter: true,
  },
  {
    name: "Hideo",
    surname: "Kozima",
    age: 56,
    nationality: "USA",
    skill: "game developer",
    height: 173,
    specialTrait: "genius",
    actualGames: ["Death Stranding", "Metal Gear"],
    isAlive: true,
  },
  {
    name: "Kim",
    surname: "Kardashian",
    age: 39,
    nationality: "USA",
    skill: "model",
    height: 159,
    zodiacSign: "scorpio",
  },
  {
    name: "Mia",
    surname: "Khalifa",
    age: 27,
    nationality: "Lebanon",
    skill: "actress",
    height: 157,
    zodiacSign: "saggitarius",
    specialTrait: "very exspressionable",
    isAlive: true,
    isFictionalCharacter: false,
  },
  {
    name: "Herman",
    surname: "Hesse",
    age: 85,
    nationality: "Germany",
    skill: "writer",
    zodiacSign: undefined,
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["Der Steppen Wolf", "Das Glasperlenspiel"],
  },
  {
    name: "Fedor",
    surname: "Dostoevsky",
    age: 60,
    nationality: "Russia",
    skill: "writer",
    isAlive: false,
    isFictionalCharacter: false,
    bibliography: ["The demons", "The Crime and Punishment", "The Idiot"],
  },
  {
    name: "Doomguy",
    surname: undefined,
    age: undefined,
    nationality: undefined,
    skill: "demon slayer",
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Angry a bit",
  },
  {
    name: "Sonic",
    surname: "The Hedgehog",
    age: 13,
    nationality: undefined,
    zodiacSign: undefined,
    isFictionalCharacter: true,
    specialTrait: "Fast as f#@k",
  },
  {
    name: "Bruce",
    surname: "Wayne",
    age: 12,
    isFictionalCharacter: true,
  },
  {
    name: "Ella",
    surname: "Fitzgerald",
    age: 79,
    isFrictionalCharacter: false,
    isAlive: false,
    specialTrait: "Amazing voice",
    signatureSongs: [
      "Cry Me a river",
      "Hello Dolly",
      "Summertime",
      "In a sentimental mood",
    ],
  },
];

console.log(arrayOfPersons);
console.log(arrOfNamesAndAges(arrayOfPersons));
console.log(arrOfMaxPropertys(arrayOfPersons));
console.log(sortForName(arrayOfPersons));
console.log(sorForZodiac(arrayOfPersons));
console.log(sortArrForPropertysArrOrObj(arrayOfPersons));
console.log(addId(arrayOfPersons));
console.log(arrOfFictional(arrayOfPersons));
