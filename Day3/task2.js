let p=new Promise(function(resolve,reject){
    let random =getRandomIntInclusive(1,100)
   
     function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
   
    if(random>50)
        resolve(random)
    else
     reject(new Error("Number is too low"))
})
p.then((value)=>{
    console.log(value)
})
.catch(error=>{
    console.log(error.message)
})