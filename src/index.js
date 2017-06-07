import path from 'path';

alert('Wow! See console.log and src/index.js!');

const o = {
  a: 'ES7',
  b: 'feature',
  c: 'babel-polyfil',
  d: path.resolve('C:/', 'Users', 'WoW', '..', 'Human')
}

console.log(
  Object.values(o).join(', ') // ES7 feature Object.values
);
