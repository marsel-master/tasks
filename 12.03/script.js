//1

/*const  arr = [10, 20, 30]
const mapped = arr.map(el => el * 2);
console.log(mapped)*/

//2
let name = 'Василий';

let getName = () => (name === undefined || name !== 'Василий' ) ? `Привет, гость` : `Привет, ${name}`;
console.log(getName());