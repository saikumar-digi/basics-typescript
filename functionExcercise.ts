// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Write a function called "twoFer" that accepts a person's name
// It should return a string in the format "one for <name>, one for me"
// If no name is provided, it should default to "you"

// twoFer() => "One for you, one for me"
// twoFer("Elton") => "One for Elton, one for me"

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo


//1

function twoFer(name:string="you"):string{
    return  `"One for ${name}, one for ${name}"`
}
twoFer("sai");

//2
// function isLeapyear(year:number):boolean{
//     if (year % 4 === 0 && year % 100 !==0 ) {
//         return true
//     }
//     else if (year % 400 === 0 ) {
//      return true   
//     }
//     return false
// }

function isLeapyear(year:number):boolean{
   return(year % 4 === 0 && year % 100 !==0 ) || (year % 400 === 0 ) 
}


function addTwo (num:number) : number{
    return num+2
    // return "hello"
}

function getUpper(val:string){
    return val.toLowerCase()
}

function signUp(name:string,email:string,isPaid:boolean){

}

let loginUser = (name:string,email:string,isPaid:boolean=true) =>{

} 

addTwo(2)
getUpper("sai")
signUp("saikumar","saikumar@gmail.com",false)
loginUser("abu","abu@gmail.com")

//union type
// function getValue (myVal: number): boolean{
//     if (myVal > 4) {
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s:string) : string =>{
return ""
}

const heros = ["thor","superhero","ironman"]

heros.map((hero):string=>{
    return `hero is ${hero}`
    // return 1
})

function consoleError(errorMsg:string):void{
    // return "error"
    console.log(errorMsg);
    
}

function fail(msg: string): never {
    throw new Error(msg);
  }

  