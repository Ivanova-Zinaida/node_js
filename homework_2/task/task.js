function* generatePassword(length) {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let min = 0;
    let max = characters.length;

    for (let i = 1; i <= length; i++) {
        yield characters[Math.floor(Math.random() * (max - min + 1)) + min];
    }
}

function password_generator(length) {
    let password = "";
    let generatePass = generatePassword(length);
    for (let value of generatePass) {
        password += value;
    }

    return password;
}
console.log(password_generator(16));
console.log(password_generator(8))