function check(s:unknown): string{
    if (typeof s === "string") {
        return s.toUpperCase();
    }
    else{
        return "Not an string"
    }

}
console.log(check("ram"))