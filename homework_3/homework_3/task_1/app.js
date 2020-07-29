let btnData = document.querySelector('#btnData');
let container = document.querySelector('#container');
    btnData.addEventListener('click', function(){
        console.log('click')
        let request = new XMLHttpRequest();
            
        request.open('GET', './ajax.html');
        request.responseType = 'text';
        request.onload = function(){
        container.textContent = request.response;
    }
    request.send();

    });