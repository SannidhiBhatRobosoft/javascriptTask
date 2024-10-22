const obj={
    name:"john",
    age:14,
    address:"bangalore"

}
let str=JSON.stringify(obj)
console.log(str)
let s=""
for (let key in obj) {
    if (s != "") {
        s += "&";
    }
    s += (key + "=" + encodeURIComponent(obj[key]));
}
console.log("'" + s + "'");