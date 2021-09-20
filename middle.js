const middle = (arr) => {
  let newArr = [];
  if (arr.length > 2) {
    if (arr.length % 2 !== 0) {
      newArr.push(arr[Math.floor(arr.length / 2)]);
    } else {
      newArr.push(arr[Math.floor(arr.length / 2)] - 1);
      newArr.push(arr[Math.floor(arr.length / 2)]);
    }
  }
  return newArr;
};


module.exports = middle;