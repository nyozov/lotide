const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  let result = {};
  sentence = sentence.split(" ").join("");
  for (let letter of sentence) {
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
};

console.log(countLetters("str with spaces"));

