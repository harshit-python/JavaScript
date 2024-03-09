// ToyotaCar class
class ToyotaCar{

    // constructor
    constructor(brand, mileage) {
        this.brand = brand;
        this.mileage = mileage;
    }

    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
}

// creating an object for ToyotaCar class
let fortuner = new ToyotaCar("fortuner", 10);
let lexus = new ToyotaCar("lexus", 12);


// inheritance
class Person {
    constructor(firstName) {
        this.species = "homo sapiens",
        this.firstName = firstName;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
}

class Engineer extends Person {
    constructor(branch, firstName) {
        super(firstName);                // to invoke parent class constructor
        this.branch = branch
    }
    work() {
        super.eat();                    // to access eat method from parent class
        console.log('solve problems, build something');
    }
}
let harshObj = new Engineer("software engineer", "harsh");


/* super keyword is used to call the constructor of its parent class 
to access the parent's properties and methods */
