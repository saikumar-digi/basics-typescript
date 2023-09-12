//String
function greet(params:string):string {
    return `hii {params} good morning`
}
console.log(greet("saikumar"));


//Numner
function number(num:number){
    return num*num
}
number(9)


//multiple params
const person = (name:string , age:number ,isActive:boolean) => {}

person("saikumar",45,true);

//void 
function test(){
    console.log("hii"); 
}

//Never
function neverStop():never{
    while(true){
console.log("stil im runing");

    }
}

function giveError(msg:string):never{
    throw new Error("msg");
}





