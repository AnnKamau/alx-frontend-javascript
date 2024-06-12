// 9-try.js

export default function divideFunction(num1, num2) {
    if (num2 === 0) {
        throw new Error('cannot divide by 0');
    }
    return num1 / num2;
}
