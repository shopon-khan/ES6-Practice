//  default ba backup number
function add(num1, num2 = 15){
    // if (num2 == undefined) {
    //     num2 = 0;
    // }
    // num2 = num2 || 15;
    return num1 + num2;
}

const total = add(15, 1);
console.log(total);