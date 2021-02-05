// function dobleIt(num){
//     return num * 2;
// }

// const dobleIt = function myFun(num) {
//     return num * 2;
// }

// => arrow holo es6 version
// akta parameter ar jonno
const dobleIt = num => num * 2;
// akadik parameter ar ketra
const add = (x, y) => x + y;
// parameter na tekle
const give5 = () => 5;
// beshal parameter ar ketra
const doMat = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(50, 70);
const result2 = give5();
const result3 = doMat(7, 5);
console.log(result3);