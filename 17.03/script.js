let arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45]

let result = arr.reduce(function(sum, elem) {
    if (elem >= 0)
        return sum + elem;
    else {
        return sum;
    }
});
console. log(result);

//1
function  func(a, b) {
    let s = []
    for (let i=0; i <b; i++){
        s[i]=a;
    }
    return s;
}

console.log(func("a", 3))