"use strict";
function addPincode(emp) {
    return emp.address.pincode + 1;
}
function nameAndAge(emp) {
    console.log(`${emp.name} and ${emp.age}`);
}
const myName = {
    name: "saikumar",
    age: 23,
    address: {
        city: "bidar",
        pincode: 377377
    }
};
addPincode(myName);
nameAndAge(myName);
const epm1 = { name: "sai", gender: "male" };
