let btnData = document.querySelector('#btnData');
let container = document.querySelector('#container');
    btnData.addEventListener('click', function(){
        console.log('click')
        let request = new XMLHttpRequest();
            
        request.open('GET', './user.json');
        request.responseType = "json";

        request.onload = function(){
            
        let data = request.response;
        data = JSON.parse(data);
        let ul = document.createElement('ul');
        for(let i = 0; i < data.length; i++){
            let li = document.createElement('li');
            li.textContent = `${data[i].lastName} ${data[i].name}`;
            ul.appendChild(li)
        }
        
        container.appendChild(ul);
    }
        
request.send();
});
