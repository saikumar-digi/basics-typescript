interface User4 {
   readonly  dbId: number ,
    userEmail : string,
    age : number,
    googleId? : number | string 
    // startTrail : ()=> string
startTrail() : string
getCoupon(couponName:string , value:number):number

}

interface User4 {
    githubToken? :string
}

const  saikumar : User4 = { dbId: 23 , userEmail :"sai@gmail.com"  ,age:19 ,
startTrail:()=>{
    return "sai"
} ,
getCoupon:(name:"sai",off:22)=>{
    return 22
}
}

saikumar.userEmail = "saikumar@gmail.com"


//Cannot assign to 'dbId' because it is a read-only property.ts(2540)
// saikumar.dbId = 11 ;
