const arr1 = [1, 2, 3, 4, 5];
const k = 2;
let newArray = [];
let i = 0;

for (i in arr1) {
  if (arr1.length > Number(i) + k) {
    newArray.push(arr1[Number(i) + k]);
  } else {
    let index = Number(i) + k - arr1.length;
    newArray.push(arr1[index]);
  }
}
console.log(newArray);
