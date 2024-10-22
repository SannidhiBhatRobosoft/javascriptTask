const arr1 = ["apple", "banana", "apple", "orange"];
const obj = {};
for (let i in arr1) {
  if (arr1[i] in obj) {
    obj[arr1[i]] = obj[arr1[i]] + 1;
  } else {
    obj[arr1[i]] = 1;
  }
}
console.log(obj);
