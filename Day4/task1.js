const arr1=["apple","banana","cherry"]
arr1.map((item)=>{
   firstLetter= item.charAt(0).toUpperCase()
    console.log(firstLetter+item.slice(1))
})