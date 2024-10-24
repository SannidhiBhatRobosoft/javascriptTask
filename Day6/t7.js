function processString(str)
{
    let a
    // console.log("The String after using trim:"+str.trim())
    // console.log("The String after using trim:"+str.toLowerCase())
    // console.log("The String after using trim:"+str.replace(/[aeiouAEIOU]/g, '*'))
    a=str.split('').reverse().join('')
    console.log("The String after using trim:"+a)
    // console.log("The String after using trim:"+str.substring(2, 8))
    if(str.toLowerCase()==a.toLowerCase())
    {
        console.log("Palindrome")
    }
    else{
        
       console.log("Not Palindrome")
   }
let obj={}
   for(let i in str)
   {
    if(str[i] in obj)

        obj[str[i]].count+=1
        else
        obj[str[i]] = { count: 1 };
   }
   console.log(obj)
}
processString("Naman")