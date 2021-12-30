/*
Write a program that will reverse a string.
*/

let rs;
let num = [];
function reverseStr(str){
    for (let i=str.length; i>=0; i--){
        rs = str.charAt(i);
        num.push(rs);
    }
    console.log(num.join(''));
}
reverseStr('abcd');