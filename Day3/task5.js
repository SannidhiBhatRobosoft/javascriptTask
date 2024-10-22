async function sannidhi() {
    let p1=await new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve("value 1")
        },1000)
    
    })
    let p2=await new Promise(function (resolve,reject){
        setTimeout(function(){
            resolve("value 2")
        },2000)
    
    })
    return [p1,p2]
    
}
sannidhi().then((value)=>{
    console.log(value)
})