//1

/*const  arr = [10, 20, 30]
const mapped = arr.map(el => el * 2);
console.log(mapped)*/

//2
let name = "Василий";

function getName() {
    if (name === undefined){
        name = 'гость'
    }
}
getName()
console.log('Привет', name)