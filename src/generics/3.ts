function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}


const objA = { name: 'Alice', age: 25 };
const objB = { job: 'Engineer', city: 'New York' };

const mergedObj = merge(objA, objB);
console.log(mergedObj); 