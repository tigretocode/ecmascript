//Forma convencional

function newUser(name, age, country) {
    var name = name || "Lolo";
    var age = age || 34;
    var country = country || "MX";
    console.log(name, age, country);
}

newUser();
newUser("Lucas", 15, "CO");


//Parámetros por defecto

function newUser2(name = "Lalo", age = 35, country = "MX") {
    console.log(name, age, country);
}

newUser2();
newUser2("Ana", 28, "CO");