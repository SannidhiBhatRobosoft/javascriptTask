const string="hello world"
let obj={}
for(let i in string)
{
    if(string.charAt(i)==' ')
        continue
    if (string.charAt(i) in obj) {
        obj[string.charAt(i)] = obj[string.charAt(i)] + 1;
      } else {
        obj[string.charAt(i)] = 1;
      }
}
console.log(obj)