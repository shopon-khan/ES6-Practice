class Parent {
    constructor(){
        this.fatherName = "Noyon Mia";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;

    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}

const baby = new Child("abir");
const baby2 = new Child("manir");
console.log(baby.getFullName());
console.log(baby.getFullName());