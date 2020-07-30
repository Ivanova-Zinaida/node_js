let btnData = document.querySelector('#btnData');
let container = document.querySelector('#container');
let ol = document.createElement('ol');
let idEnd = 4;
let idStart = 0;
let xhr = new XMLHttpRequest();
    xhr.open('GET', `./product.json?idStart=${idStart}&$idEnd=${idEnd}`);
    xhr.responseType = 'json';
    xhr.onload = function(){
        let data = xhr.response;
        
        for(let i = 0; i < data.length; i++){
            let li = document.createElement('li');
            li.textContent = `Название книги :${data[i].title} - цена: ${data[i].price}`;
            ol.appendChild(li)
        }
        container.appendChild(ol);
    }
xhr.send()

    btnData.addEventListener('click', function(){
        console.log('click')
        let request = new XMLHttpRequest();
        idStart = idEnd;
        idEnd = idEnd + 4;
        
        request.open('GET', `./product.json?idStart=${idStart}&$idEnd=${idEnd}`);
        request.responseType = "json";

        request.onload = function(){     
            let data = request.response;
            if(data.length > 0){
                for(let i = 0; i < data.length; i++){
                    let li = document.createElement('li');
                    li.textContent = `Название книги :${data[i].title} - цена: ${data[i].price}`;
                    ol.appendChild(li)
                }

                container.appendChild(ol); 
            } else{
                console.log(data);
                btnData.setAttribute("value", "товары закончились");
                btnData.setAttribute("disabled", "disabled");
            }

    }
        
request.send();

});

