class Product{
    constructor(name, price, category) {
        this.name=name
        this.price=price
        this.category=category
    }
    displayInfo(){
        return this.name+" "+this.price+" "+this.category
    }
    toObject() {
        return { name: this.name, price: this.price, category: this.category };
    }
}
class Electronic extends Product{
    constructor(name, price, category,year){
        super(name, price, category)
        this.year=year
    }
    displayInfo(){
        return super.displayInfo()+" "+this.year
    }
    toObject() {
        return { name: this.name, price: this.price, category: this.category };
    }
}
class Clothing extends Product{
    constructor(name, price, category,size,materialProperty){
        super(name, price, category)
        this.size=size
        this.materialProperty=materialProperty
    }
    displayInfo(){
       return super.displayInfo()+" "+this.size+" "+this.materialProperty
    }
    toObject() {
        return { ...super.toObject(), size: this.size, materialProperty: this.materialProperty };
    }
}

class ShoppingCart{
    static totalItems
    #array_products=[]
    addProduct(product){
         
        this.#array_products.push(product.toObject())
        this.totalItems++
    } 
    deleteProduct(productName){
        this.#array_products = this.#array_products.filter(prod => prod.name !== productName);
        this.totalItems--;
        
    }   
    getProducts()
    {
        return this.#array_products
    }
    calculateTotal()
    {
        var sum=0
       this.#array_products.map(item=>{
        sum+=item.price
       })
       return sum
    }
}
const p1=new Electronic("laptop",1000,"ELectronics",2020)
const p2=new Clothing("shirt",8000,"Clothing",9,"wool")
const p3=new Clothing("pant",7000,"Clothing",9,"wool")
const cart=new ShoppingCart()
console.log("Products where Added to Cart")
cart.addProduct(p1)
cart.addProduct(p2)
cart.addProduct(p3)
console.log(cart.getProducts())
console.log("After deleting the product")
cart.deleteProduct("laptop")
console.log(cart.getProducts())
console.log("The total price of the products in the cart")
console.log(cart.calculateTotal())
