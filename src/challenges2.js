// Desafio 10
function techList(techs, name) {
  let arrayOfTechs = [];
  let sortedTechs = techs.sort();
  if (techs.length === 0) {
    arrayOfTechs = 'Vazio!';
  } else {
    for (let i = 0; i < techs.length; i += 1) {
      arrayOfTechs.push({
        tech: sortedTechs[i],
        // Reference: https://alligator.io/js/object-property-shorthand-es6/
        name,
      });
    }
  }
  return arrayOfTechs;
}

// Desafio 11
function checkLength(arrayOfNumbers) {
  let result = true;
  if (arrayOfNumbers.length !== 11) {
    result = false;
  }
  return result;
}

function checkSize(arrayOfNumbers) {
  let result = true;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > 9 || arrayOfNumbers[i] < 0) {
      result = false;
    }
  }
  return result;
}

function checkRepetition(arrayOfNumbers) {
  let result = true;
  let base = 0;
  let counter = 0;
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    base = arrayOfNumbers[i];
    for (let j = 0; j < arrayOfNumbers.length; j += 1) {
      if (arrayOfNumbers[j] === base) {
        counter += 1;
      }
    }
    if (counter > 2) {
      result = false;
    }
    counter = 0;
  }
  return result;
}

function generatesDd(arrayOfNumbers) {
  let ddd = [];
  for (let i = 0; i < 2; i += 1) {
    ddd[i] = arrayOfNumbers[i];
  }
  let finalNumber = `(${ddd.join('')})`;
  return finalNumber;
}

function generatesFirstPart(arrayOfNumbers) {
  let firstPart = [];
  for (let i = 2; i < 7; i += 1) {
    firstPart[i - 2] = arrayOfNumbers[i];
  }
  let finalNumber = firstPart.join('');
  return finalNumber;
}

function generatesSecondPart(arrayOfNumbers) {
  let secondPart = [];
  for (let i = 7; i < 11; i += 1) {
    secondPart[i - 7] = arrayOfNumbers[i];
  }
  let finalNumber = secondPart.join('');
  return finalNumber;
}

function generatePhoneNumber(numbers) {
  let r;
  let length = checkLength(numbers);
  let repetition = checkRepetition(numbers);
  let size = checkSize(numbers);
  if (length === false) {
    r = 'Array com tamanho incorreto.';
  } else if (repetition === false || size === false) {
    r = 'não é possível gerar um número de telefone com esses valores';
  } else {
    r = `${generatesDd(numbers)} ${generatesFirstPart(numbers)}-${generatesSecondPart(numbers)}`;
  }
  return r;
}

// Desafio 12
function checkCondition1(lineA, lineB, lineC) {
  let condition1 = false;
  // Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    condition1 = true;
  }
  return condition1;
}

function checkCondition2(lineA, lineB, lineC) {
  let condition2 = false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    condition2 = true;
  }
  return condition2;
}

function checkCondition3(lineA, lineB, lineC) {
  let condition3 = false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    condition3 = true;
  }
  return condition3;
}

function triangleCheck(lineA, lineB, lineC) {
  let answer1 = checkCondition1(lineA, lineB, lineC);
  let answer2 = checkCondition2(lineA, lineB, lineC);
  let answer3 = checkCondition3(lineA, lineB, lineC);
  let result = false;

  if (answer1 === true && answer2 === true && answer3 === true) {
    result = true;
  }

  return result;
}

// Desafio 13
function calcSum(total, number) {
  return total + number;
}

function amountOfDrinks(phrase) {
  // Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  // Refecence: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string/30607466
  let drinks = phrase.replace(/\D/g, '');
  let numbers = drinks.split('');
  for (let i = 0; i < numbers.length; i += 1) {
    // Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    numbers[i] = Number.parseInt(numbers[i], 10);
  }
  // Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  let sum = numbers.reduce(calcSum);
  return sum;
}

function cupOfWater(drinks) {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator.
  let water = drinks > 1 ? 'copos de água' : 'copo de água';
  return water;
}

function hydrate(phrase) {
  let drinks = amountOfDrinks(phrase);
  let hydration = cupOfWater(drinks);
  let result = `${drinks} ${hydration}`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
