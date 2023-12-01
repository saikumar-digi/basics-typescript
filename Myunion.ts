let score : number | string | boolean = 33

score = 44

score = "55"


type User2 ={
    name:string,
    age:number
}

type Admin ={
    userName:string,
    age:number
}

let sai : User2 | Admin = {name:"sai",age:23}

sai = {userName:"sai",age:24}



function getDbId(id: number | string){

if (typeof id === "string") {
    id.toLowerCase()
}
else if (typeof id === "number") {
    id.toFixed()
}

    // console.log(`Db Id is ${id}`); 
}

getDbId(3)
getDbId("4")


//array

const data : number[] = [1,2,3]

const data1 : string[] = ["1","2","3"]

//error
//const data2 : string | number [] = ["1",2,4]
// const data2 : string[] | number[] = ["1",2,4]


 const data2 : (string | number)[] = ["1",2,4]


 let seatAllotemnt : "window" | "middle" | "corner"

 //error
//  seatAllotemnt  = "driver"

 seatAllotemnt = "middle"




