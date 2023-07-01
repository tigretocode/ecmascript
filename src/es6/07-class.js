//declarando
class User {};
/* instancia de una clase
const newUser = new User(); */

class user {
    //metodos
    greeting() {
        return "Hello";
    }
};

const lalo = new user();
console.log(lalo.greeting());
// constructor, donde se inicializan elementos de la clase
class user{
    constructor(){
        console.log("Nuevo Usuario");
    }
    greeting() {
        return "Hello";
    }
}

const david = new user();

//this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user("Ana");
console.log(ana.greeting());

//setters and  getters

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // métodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const lolillo = new user("Juan", 15);
console.log(lolillo.uAge);
console.log(lolillo.uAge = 20);