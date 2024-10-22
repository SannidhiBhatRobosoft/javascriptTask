const arr1=[1, -2, 3, 4]
let con=false
for(let i in arr1)
{
    if(arr1[i]<0)
        con=true
}
console.log(con)