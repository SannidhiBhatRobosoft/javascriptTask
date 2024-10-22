const arr1=[1, 2, 3, 4, 3, 2, 1]
const newArray=arr1.filter((it,index)=>
     arr1.indexOf(it)===index
)
console.log(newArray)