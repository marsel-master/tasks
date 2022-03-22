//class task
/*const arr = [-3, -4, -5, -3, 7, 3 , 5];
const found = arr.find(el => el > 0);
console.log(found)*/

//1
const func = delay => {
    console.log('Hello after ' + delay + ' seconds');
};
setTimeout(func, 4000, 4);
setTimeout(func, 8000, 8);

//2

function mul(n,m) {
    let z = n * m;
    return z
}
console.log(mul(7,2))

//3
function factorial(n){
    var res = 1;
    while (n--)
    res *= n + 1
    return res;
}
console.log(factorial(7));







