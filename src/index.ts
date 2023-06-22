abstract class Animal {
    name: string;
    makeSound(): void;
}

class Dog extends Animal {
   name = "Dog";
   makeSound() {
       console.log("Woof! Woof!");
   }
}

let myPet = new Dog();
myPet.walk();
myPet.makeSound();

