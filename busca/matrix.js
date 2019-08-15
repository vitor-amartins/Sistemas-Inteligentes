module.exports = {
  printMatrix: (matrix) => {
    matrix.forEach(row => {
      row.forEach((element, index, row) => {
        if (!index) {
          process.stdout.write(`[${element}, `);
          return;
        }
        if (index == row.length - 1) {
          console.log(`${element}]`);
          return;
        }
        process.stdout.write(`${element}, `);
      });
    });
  },
};
