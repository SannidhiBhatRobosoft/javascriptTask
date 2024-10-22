let processNumber=new Promise(function(resolve,reject){
    let number =10
    resolve(number*2)
}).then((value)=>{
   return new Promise(function(resolve,reject){
    resolve( value+=10)
   })

}).then((value)=>{
    console.log(value)
})
