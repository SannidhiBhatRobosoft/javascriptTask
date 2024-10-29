interface Person{
    name:string,
    age:number,
    email?:string
    }
    const person1:Person={
    name:"Raju",
    age:22,
    email:"Raju@gmail.com"
    }
    const greeting=(p1:Person)=>{
    
        console.log("Hello ",p1.name)
        }
    greeting(person1)
    