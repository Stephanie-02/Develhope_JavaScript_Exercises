// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }

// console.log(sum(1, 2, 3, 4, 5));

function sum(...num1) {
    return num1.reduce((a,b) => a+b);
}

console.log(sum(1,2,3,4,5));

