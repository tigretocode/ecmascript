function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it = iterate(["Jackson", "Tom", "Su", "Brad","Lui"]);


console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);



