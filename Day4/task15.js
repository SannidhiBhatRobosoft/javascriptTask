const obj={}
if(!Object.keys(obj).length)
    console.log("false")

obj.a="sa"
if(Object.keys(obj).length)
    console.log("true")