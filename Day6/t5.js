function applyTwice (n){
    return function(n){
        return n*2
    }
}
const twice=applyTwice()
console.log(twice(2))