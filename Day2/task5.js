const a=[1,2,3,5,6,7,8,9]

//function for returning the only the multiple of 3
var b=returnMultupleOfThree(a,b)
function returnMultupleOfThree(a)
{
    const b=[]
    
    for(let i in a)
    {
        if(a[i]%3==0)
            b.push(a[i]) //element a[i] is pushed to array b
    }
    return b
}
console.log("Multiple of 3")
console.log(b)