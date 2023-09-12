// function printName(person:{firstName:string,lastName:string}) :void{
//     console.log(`${person.firstName} And ${person.lastName}`);
// }

printName({firstName:"sai",lastName:"bidave"});

let coordinate : {x:number ,y:number} =  {x:2,y:45}

function randomCoordinate(): {x:number ,y:number} {
    return {x:Math.random(),y:Math.random()}
}


function printName(person:{firstName:string,lastName:string}) :void{
    console.log(`${person.firstName} And ${person.lastName}`);
}

// its giving a error 
//printName({firstName:"sai",lastName:"kumar" ,age:23})

const singer = {firstName:"sai",lastName:"kumar" ,age:23 ,alive:true}
printName(singer)

function createUser(user: {
    username: string;
    email: string;
    isAdmin: boolean;
  }) {
    return "added 3 fields";
  }