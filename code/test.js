function* myGenerator() {
  yield "hello";
  return "world";
}
let g = myGenerator();
console.log(g.next()); // { value: 'hello', done: false }
console.log(g.next()); // { value: 'world', done: true }
