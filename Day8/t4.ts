type Status = "active" | "inactive" | "pending";
const msg=(s:Status):string=>{
    switch(s){
        case "active":
            return "active"
        case "inactive":
            return "inactive"
        case "pending":
            return "pending"
    }

}
console.log(msg("active"))
console.log(msg("inactive"))
console.log(msg("pending"))