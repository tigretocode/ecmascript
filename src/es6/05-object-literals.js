// Enahced object literals
// manera convencional
function newUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country,
    }
};

// 
function newUser(user, age, country, uId) {
    return {
        user,
        age,
        country,
        id: uId
    }
};

console.log(newUser("Lalo", 34, "MX", 1));