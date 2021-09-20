const words = ["ground", "control", "to", "major", "tom"];
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`🟢 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(map(["hello", "snake"], word1 => word1[0]),map(["hi", "sky"], word2 => word2[0]));
assertArraysEqual(map(["hello", "snake"], word1 => word1[0]),map(["hi", "blue"], word2 => word2[0]));

module.exports = map