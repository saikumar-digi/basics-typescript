"use strict";
//String
function greet(params) {
    return `hii {params} good morning`;
}
console.log(greet("saikumar"));
//Numner
function number(num) {
    return num * num;
}
number(9);
//multiple params
const person = (name, age, isActive) => { };
person("saikumar", 45, true);
//void 
function test() {
    console.log("hii");
}
//Never
function neverStop() {
    while (true) {
        console.log("stil im runing");
    }
}
function giveError(msg) {
    throw new Error("msg");
}
