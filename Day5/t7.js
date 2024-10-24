class Product {
    #name
    #price
    constructor(name,age){
        this.#name=name
        this.#price=age
    }
    get name(){
        return this.#name
    }
    set name(newName){
         this.#name=newName
    }
    get price(){
        return this.#price
    }
    set price(newPrice){
         this.#price=newPrice
    }
}
const p=new Product("Laptop",1000)
console.log(p.name+" "+p.price)
p.name="Mouse"
p.price=5000
console.log(p.name+" "+p.price)