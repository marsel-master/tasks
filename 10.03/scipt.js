//class task
/*var al = [];
var denzl = [];
var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
for(var i = 0;i<arr.length;i++){
    arr[i] % 2 ? denzl.push(arr[i]) : al.push(arr[i])
}
var ob = {
    chet: al,
    nechet: denzl
}

console.log(ob);*/


//1
function  min (x,y) {
    if(x === undefined) x = 5;
    if(y === undefined) y = 9;
    var z = Math.min(x,y)
    console.log(z)
}
min()