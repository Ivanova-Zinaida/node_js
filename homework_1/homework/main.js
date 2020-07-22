/*
1. Требуется реализовать декоратор с параметрами pause, 
который откладывает выполнение функции на указанное 
количество секунд. Пример использования:
function func() {
	console.log('Функция выполниться с задержкой в 2 секунды!');
}
let paused = pause(func, 2);
paused();
*/

function pause(func, time) {
    return function () {
        console.log(`Функция выполниться с задержкой в ${time} секунды!`);
        setTimeout(func, time * 1000);
    }
}

function doSomthing() {
    console.log("work function doSomthing");
}

let paused = pause(doSomthing, 3);
paused();


/*2*. Требуется реализовать декоратор с параметрами returnObject, 
который в случае, если функция возвращает массив, подменяет 
его объектом. Имена задаются в параметрах декоратора. Декоратор 
универсальный, количество имен переменное.
Пример использования №1:
function func(){
	return [1, 2]
}
let func_decoreted = return_object(func, 'one', 'two');
let r = func_decoreted();
console.log(r.one); // 1
console.log(r.two); //2
Пример использования №2:
function func(){
	return ['JS', 'is', 'programming language']
}
let r = return_object (func, 'a', 'b', 'c')();
console.log(r.c) // 'programming language'*/


function func() {
    return [1, 2]
}

function returnObject(func = func, ...names) {
    return function () {
        let array = func();

        if (array instanceof Array) {
            let result = {};
            for (let i = 0; i < names.length; i++) {
                result[names[i]] = array[i];
            }

            return result;
        } else {
            return array;
        }
    }
}

let func_decoreted = returnObject(func, 'one', 'two');
console.log(func_decoreted());
let r = func_decoreted();
console.log(r.one); // 1
console.log(r.two); //2


function func2() {
    return ['Python', 'is', 'programming language'];
}

let r2 = returnObject(func2, 'a', 'b', 'c')();
console.log(r2.c); // 'programming language'