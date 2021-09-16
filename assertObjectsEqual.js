const eqArrays = (arr1, arr2) => {
  for (let i = 0; i < arr1.length; i++) {
    for (let y = 0; y < arr2.length; y++) {
      if ((arr1[i] === arr2[y]) && (arr1.length === arr2.length)) {
        return true;
      } else {
        return false;
      }
    }
  }
  
};

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (typeof object1[key] === "object" && typeof object2[key] === "object") {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({name: "john", age: 20}, {name: "john", age: 20 });
assertObjectsEqual({name: "john", age: 20}, {name: "john", age: 21 });
