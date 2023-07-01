const anotherFuncion = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve("yeh!");
        }else {
         reject("D'oh");   
        }
    })
}

anotherFuncion()
.then(response => console.log(response))
.catch(err => console.log(err));