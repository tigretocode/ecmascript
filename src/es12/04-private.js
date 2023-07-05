// # los elentos privados solo pueden ser accedidos dentro de la misma clase

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // métodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const lolillo = new user("Juan", 15);
console.log(lolillo.uAge);
console.log(lolillo.uAge = 20);