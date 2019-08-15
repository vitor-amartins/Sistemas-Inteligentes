module.exports = {
  copyArr: (arr) => {
    return arr.slice().join()
  },
  head: (arr) => {
    return arr[0];
  },
  tail: (arr) => {
    return arr.slice(1);
  },
};

