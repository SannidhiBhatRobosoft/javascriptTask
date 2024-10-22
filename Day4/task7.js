const a1=[1, 2, 3]
const a2= [2, 4]
for(let i in a1)
{
     if(a2.indexOf(a1[i])<0)
        console.log(a1[i])
}
for(let i in a2)
{
     if(a1.indexOf(a2[i])<0)
        console.log(a2[i])
}
