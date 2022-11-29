"use strict";
//1

function sliceStr(str) {
  return `${str.slice(0, 30)}...`;
}

console.log(sliceStr("But you have no right to call me a murderer"));

//2

function invertStrCase(str) {
  return str
    .split("")
    .map((e) => {
      if (e === e.toUpperCase()) {
        return e.toLowerCase();
      } else return e.toUpperCase();
    })
    .join("");
}

console.log(invertStrCase("C&C Red Alert 3"));

//3

function analyzingStr(str) {
  const obj = {
    allSymbols: str.length,
    symbolsWithoutSpaces: str.split(" ").join("").length,
    quantityOfWords: str.split(" ").length,
    sentenceType: "null",
  };
  if (str[str.length - 1] === "?") {
    obj.sentenceType = "question";
  } else if (str[str.length - 1] === "!") {
    obj.sentenceType = "exclamatory";
  } else if (str[str.length - 1] === ".") {
    obj.sentenceType = "affirmative";
  }
  return obj;
}

console.log(analyzingStr("dsdasdsa ddsa."));

//4

function moderation(str, banedWord) {
  if (!str.toUpperCase().includes(banedWord.toUpperCase())) return str;

  const arr = str.split(" ").map((e) => {
    if (e.toUpperCase() === banedWord.toUpperCase()) {
      e = "*".repeat(banedWord.length);
    }
    return e;
  });
  
  return arr.join(" ");
}

console.log(moderation("asd dew", "asd"));
