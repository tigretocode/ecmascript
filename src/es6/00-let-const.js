//declara y asigna
var lastName = "David";

// reasignar la variable

lastName = "Lu";
console.log(lastName);   //selecciona todo el código

let fruit = "Apple";

// reasignar la variable

fruit = "Kiwi";
console.log(fruit);

const animal = "Dog";
// reasignar la variable
animal = "Cat";
console.log(animal);

// escribiendo una función

const fruits = () => {
    if(true) {
        var fruit1 = "Apple"; // function scope
        let fruit2 = "Kiwi";  // block scope
        const fruit3 = "Banana"; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();