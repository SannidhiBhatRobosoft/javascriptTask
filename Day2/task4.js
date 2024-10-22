function check(a)
{
    for(let i in a)
    {
        console.log(Boolean(a[i]))
    }
}


//Check the boolean in the array
const array1=["",0,null,"hello",42]
check(array1)