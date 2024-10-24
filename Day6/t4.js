function makeGreeting (name){
    return function(){
        return "Hello "+name
    }
}
const greet=makeGreeting("John!")
console.log(greet())