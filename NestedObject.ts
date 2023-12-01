type Emp = {
    name:string,
    age:number,
    address:{
        city:string,
        pincode:number
    }
} 

function addPincode(emp:Emp) :number{
return emp.address.pincode+1;
}
function nameAndAge(emp:Emp): void{
    console.log(`${emp.name} and ${emp.age}`);
}

const myName:Emp = {
    name:"saikumar",
    age:23,
    address:{
        city:"bidar",
        pincode:377377
}
}

addPincode(myName);

nameAndAge(myName)

//option Properties
type Emp1 = {
    name:string,
    age?:number,
    gender:string
} 

const epm1 : Emp1 =  {name:"sai",gender:"male"}