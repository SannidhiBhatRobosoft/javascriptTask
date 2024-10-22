const arr1=[1,"2",3,"4",5,"6",7]

addArrayElement(arr1)


function addArrayElement(a){
    var sum=0
    for(let i in a)
    {
        typeof(a[i])=="number"?sum+=a[i]:sum=sum+Number(a[i])
       
    }
    console.log(sum)
}