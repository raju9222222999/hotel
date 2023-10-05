const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4, 5];
const c = [1, 2, 3, 4, 5];

const d = a;

const e = [...a];

d[2] = 0;

console.log(d === a, e);

console.log(d === c);
