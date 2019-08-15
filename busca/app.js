const { head, tail } = require('./array');
const graph = require('./graph');
const { costOfPath, expansionPossibilities } = require('./graph-utils');


const breadthFirstSearch = (vFinal, matrix, boundary, iterations = 0) => {
  if (!boundary.length) {
    console.log('Falha');
    return;
  }
  const actual = head(boundary);
  const newBoundary = tail(boundary);
  const vInitial = actual.vertex;
  if (vInitial === vFinal) {
    console.log('========== Breadth First Search ==========');
    console.log('Profundidade: ' + actual.path.length);
    console.log('Custo: ' + costOfPath(actual.path.concat([vFinal]), matrix));
    console.log('Caminho: [' + actual.path.concat([vFinal]) + ']');
    console.log(`Iterações: ${iterations}`);
    return;
  }
  const possibilities = expansionPossibilities(vInitial, matrix);
  possibilities.forEach(possibility => {
    if (!actual.path.includes(possibility.vertex)) {
      possibility.path = actual.path.concat([vInitial]);
      newBoundary.push(possibility);
    }
  });
  breadthFirstSearch(vFinal, matrix, newBoundary, iterations+1);
};

const depthFirstSearch = (vFinal, matrix, boundary, iterations = 0) => {
  if (!boundary.length) {
    console.log('Falha');
    return;
  }
  const actual = head(boundary);
  const newBoundary = tail(boundary);
  const vInitial = actual.vertex;
  if (vInitial === vFinal) {
    console.log('========== Depth First Search ==========');
    console.log('Profundidade: ' + actual.path.length);
    console.log('Custo: ' + costOfPath(actual.path.concat([vFinal]), matrix));
    console.log('Caminho: [' + actual.path.concat([vFinal]) + ']');
    console.log(`Iterações: ${iterations}`);
    return;
  }
  const possibilities = expansionPossibilities(vInitial, matrix);
  possibilities.reverse().forEach(possibility => {
    if (!actual.path.includes(possibility.vertex)) {
      possibility.path = actual.path.concat([vInitial]);
      newBoundary.unshift(possibility);
    }
  });
  depthFirstSearch(vFinal, matrix, newBoundary, iterations+1);
};

const initialBoundary = [{
  vertex: 1,
  path: [],
}];

breadthFirstSearch(10, graph, initialBoundary);
depthFirstSearch(10, graph, initialBoundary);
