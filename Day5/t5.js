class BaseClass{
    constructor(name) {
        console.log("Base constructor")
    }
}
class Derivedclass extends BaseClass{
    constructor(){
        super()
        console.log("Deriwved Class")
    }
}

const der=new Derivedclass()
