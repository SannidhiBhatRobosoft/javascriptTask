class Animal {
    name: string;
    age: number;
    sound(){
        console.log("The animal makes a sound")
    }
  }
  class Dog extends Animal{
    sound(){
        console.log("The dog barks.")
    }
  }
  const d=new Dog()
  d.sound()