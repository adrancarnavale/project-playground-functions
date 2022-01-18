// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  let result;
  if (conditionOne === true && conditionTwo === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  let phraseAfter = phrase.split(' ');
  return phraseAfter;
}

// Desafio 4
function concatName(listOfItens) {
  let concatenatedList;
  let end = listOfItens.length;
  // Refecence: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
  concatenatedList = `${listOfItens[end - 1]}, ${listOfItens[0]}`;
  return concatenatedList;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function findHighestNumber(arrayOfNumbers) {
  let counter = arrayOfNumbers[0];

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > counter) {
      counter = arrayOfNumbers[i];
    }
  }
  return counter;
}

function highestCount(arrayOfNumbers) {
  let highestNumber = findHighestNumber(arrayOfNumbers);
  let counter = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] === highestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = (cat1 - mouse) ** 2;
  let distance2 = (cat2 - mouse) ** 2;
  let result = 'os gatos trombam e o rato foge';

  if (distance1 > distance2) {
    result = 'cat2';
  } else if (distance1 < distance2) {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function divisibilityTwo(number) {
  let result;
  if (number % 15 === 0) {
    result = 'fizzBuzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function divisibilityOne(number) {
  let result;
  if (number === 3 || number === 9) {
    result = 'fizz';
  } else if (number === 5 || number === 25) {
    result = 'buzz';
  } else {
    result = divisibilityTwo(number);
  }
  return result;
}

function fizzBuzz(arrayOfNumbers) {
  let stringWithResults = [];
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    stringWithResults[i] = divisibilityOne(arrayOfNumbers[i]);
  }
  return stringWithResults;
}

// Desafio 9

function convertToNumbersSecondary(phrase) {
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === 'o') {
      phrase[i] = '4';
    } else if (phrase[i] === 'u') {
      phrase[i] = '5';
    }
  }
  return phrase;
}

function convertToNumbersPrimary(phrase) {
  let initialPhrase = phrase.split('');
  for (let i = 0; i < initialPhrase.length; i += 1) {
    if (initialPhrase[i] === 'a') {
      initialPhrase[i] = '1';
    } else if (initialPhrase[i] === 'e') {
      initialPhrase[i] = '2';
    } else if (initialPhrase[i] === 'i') {
      initialPhrase[i] = '3';
    }
  }
  let finalPhrase = convertToNumbersSecondary(initialPhrase);
  return finalPhrase.join('');
}

function convertToLettersSecondary(phrase) {
  for (let i = 0; i < phrase.length; i += 1) {
    if (phrase[i] === '4') {
      phrase[i] = 'o';
    } else if (phrase[i] === '5') {
      phrase[i] = 'u';
    }
  }
  return phrase;
}

function convertToLettersPrimary(phrase) {
  let initialPhrase = phrase.split('');
  for (let i = 0; i < initialPhrase.length; i += 1) {
    if (initialPhrase[i] === '1') {
      initialPhrase[i] = 'a';
    } else if (initialPhrase[i] === '2') {
      initialPhrase[i] = 'e';
    } else if (initialPhrase[i] === '3') {
      initialPhrase[i] = 'i';
    }
  }
  let finalPhrase = convertToLettersSecondary(initialPhrase);
  // Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return finalPhrase.join('');
}

function encode(phrase) {
  let encodedPhrase = convertToNumbersPrimary(phrase);
  return encodedPhrase;
}

function decode(phrase) {
  let decodedPhrase = convertToLettersPrimary(phrase);
  return decodedPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
