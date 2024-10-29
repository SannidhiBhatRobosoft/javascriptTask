const arr:number[]=[1,2,3,4,5]
const addthearrayelemets=(arr:number[]):number=>{
	let sum:number=0
	arr.map(ele=>{
    sum+=ele
    })
    return sum
}
console.log(addthearrayelemets(arr))