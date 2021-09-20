const assertEqual = require('./assertEqual')

const tail = (arr) => {
  let newArr = arr.slice(1);
  return newArr;
};


module.exports = tail
