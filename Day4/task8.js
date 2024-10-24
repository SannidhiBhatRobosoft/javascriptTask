const arr = [1, 2, 3, 4, 5], k = 2, direction = "left"
// Expected output: [3, 4, 5, 1, 2]"
 
function rotateleft(arr,k){
for(let i=0;i<k;i++){
    let rotatedarr = arr.shift();
    arr.push(rotatedarr);
}
return arr;
}
const result = rotateleft(arr,k);
console.log(result);