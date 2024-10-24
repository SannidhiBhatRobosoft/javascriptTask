class Animal{
    sound(){
        console.log("Main")
    }

}
class Dog extends Animal{
    sound(){
        console.log("Bark")
    }
    
}
class Cat extends Animal{
    sound(){
        console.log("Meow")
    }
}

const dog=new Dog()
const cat=new Cat()
dog.sound()
cat.sound()