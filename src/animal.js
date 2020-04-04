class Animal {
    constructor (name) {
        this.name = name;
    }
        sound() {
            return "sound"
        }
        eat() {
            return `${this.name}` + " eats";
        }
}
class Dog extends Animal {
    sound () {
        return "Dog barks"
    }
}
let dog = new Dog ("Rax");

class Cat extends Animal{
    sound (){
        return "Cat Moews"
    }
}
let cat = new Cat ("Stormy");

class Home {
    constructor(name) {
        this.name = name;
        this.animals = [];
    }

    AdoptPet(name){
        for (let i = 0; i < this.animals.length; i++ ){
            if(this.animals[i]==name){
                throw "Cant adopt same pet twice";
            }
        }
        this.animals.push(name);
            return this.animals;
    }
    makeAllSounds(){
        for(let i=0; i < this.animals.length; i++){
            console.log(this.animals[i].sound());
        }
    }
}
let home = new Home();
let dog1 = new Dog();
let dog2 = new Dog();


home.makeAllSounds();
home.AdoptPet(dog1);
home.makeAllSounds();

home.AdoptPet(cat);
home.makeAllSounds();


home.AdoptPet(dog2);
home.makeAllSounds();

module.exports = Animal, Cat, Dog, Home;


