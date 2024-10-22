const divideNumbers=(a,b)=>{
    try{
        if(b===0)
            throw new Error("second number is zero")
        else
        console.log("second number is not zero")

    }
    catch(error){
console.log(error.message)
    }

}
divideNumbers(10,0)