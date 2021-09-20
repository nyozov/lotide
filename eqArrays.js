const assertEqual = require('./assertEqual')

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


module.exports = eqArrays