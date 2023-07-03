try {
    hello();
} catch (error) {
    console.log(error);
}

// al ejectutar devuelve un error

try {
    anotherFn();
} catch {
    console.log("da error");
}