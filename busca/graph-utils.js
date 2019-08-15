const costOfEdgeBetween = (vertex1, vertex2, matrix) => {
  return matrix[vertex1 - 1][vertex2 - 1];
};

const costOfPath = (path, matrix) => {
  if (path.length < 2) return 0;
  let cost = 0;
  for (let i = 0; i < path.length - 1; i++) {
    cost += costOfEdgeBetween(path[i], path[i + 1], matrix);
  }
  return cost;
};

const expansionPossibilities = (vertex, matrix) => {
  let result = [];
  matrix[vertex - 1].forEach((element, index) => {
    if (element) {
      result.push({
        'vertex': index + 1,
      });
    }
  });
  return result;
};

module.exports = {
  costOfEdgeBetween,
  costOfPath,
  expansionPossibilities,
};
