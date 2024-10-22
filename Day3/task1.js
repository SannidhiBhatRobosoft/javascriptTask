    let delayedGreeting=new Promise( (resolve,reject) =>{
        setTimeout(()=>{
            resolve("Hello World")
            console.log("Hello World")
            
        },2000)
        
        
    
    })


console.log(delayedGreeting)

