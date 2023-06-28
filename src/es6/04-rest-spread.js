//Array destructura

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
//console.log(a, b);
console.log(a, fruits[1]);

//Object destructuring

let user = {username: "Lolo", age:34};
let { username, age} = user;
console.log(username, age);

//Spread operator

let person = {name: "lolo", age: 28};
let country = "MX";

//let data = { ...person, country};
let data = {id: 1, ...person, country};
console.log(data);

//Parámetro rest

function sum(num, ...values)  {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);
