'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :
let total = 0;
let i = 0;
function multiply (number1,  number2){
    while (i <= number2) {
        total += number1;
        i++;
    }
}
return multiply
//     if (number1 ===0 || number2 ===0){
//         return 0;
//     }  else if (number1 >0){
//         while (i <= number2) {
//             total = total + number1;
//             i++;
//             return total
//         }
//     }   else if (number1 >0){
//         while (i <= number2) {
//             total = total + number1;
//             i++;
//             return total
//             }
//     }
// }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
