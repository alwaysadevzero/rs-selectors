"use strict";
class Animal {
    walk() {
        console.log("Walking...");
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.name = "Dog";
    }
    makeSound() {
        console.log("Woof! Woof!");
    }
}
let myPet = new Dog();
myPet.walk();
myPet.makeSound();
