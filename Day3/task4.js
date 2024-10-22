let p1=new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve("value 1")
    },1000)

})
let p2=new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve("value 2")
    },2000)

})

let all_promise=Promise.all([p1,p2])

all_promise.then((value)=>{
    console.log(value)
})