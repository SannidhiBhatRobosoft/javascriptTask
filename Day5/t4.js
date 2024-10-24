class Shape{
    area(){
        return 0
    }

}
class Circle extends Shape{
    area(r){
        return 3.14*r*r
    }
    
}
class Reactangle extends Shape{
    area(l,b){
        return l*b
    }
}

const c=new Circle()
const r=new Reactangle()
console.log(c.area(2))
console.log(r.area(3,4))