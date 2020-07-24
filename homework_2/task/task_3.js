const eventsObj = {};

on('eat', stringData => {
    console.log('Первым: Я кушаю  ' + stringData + '.');
});

on('eat', stringData => {
    console.log('Вторым: Я кушаю  ' + stringData + '.');
});

setTimeout(() => {
    emit('eat', 'бутерброд');
}, 3000);

setTimeout(() => {
    emit('eat', 'мясо');
}, 2000);

setTimeout(() => {
    emit('eat', 'яблочко');
}, 500);


function on(eventName, callback) {
    eventsObj[eventName] = eventsObj[eventName] || [];
    eventsObj[eventName].push(callback);

}

function emit(eventName, stringData) {
    for (let val of eventsObj[eventName]) {
        val(stringData)
    }
}