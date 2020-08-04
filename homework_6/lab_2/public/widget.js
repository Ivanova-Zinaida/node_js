let wrgsv = {
      idBox: 'wrgsv', 
      url_get_data_widget: '//localhost/get_widget_data', 
      url_style: '//localhost/widget.css', 
      init: function() { 
       if (document.getElementById(this.idBox)) { 
           this.addStyle();
           let self = this; 
           let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest :
          XDomainRequest; 
           let xhr = new XHR();
           xhr.open('GET', this.url_get_data_widget, true);
           xhr.onload = function() { 
           if (this.response) { 
                self.addWidget(JSON.parse(this.response));
                }
           }
           xhr.onerror = function() { console.log('onerror '+this.status); } 
           xhr.send();
       } else {
            console.log('The specified block ID "'+id+'" is missing');
            }
      },
      addStyle: function() { 
            let style = document.createElement('link'); 
            style.rel = 'stylesheet';
            style.type = 'text/css'; 
            style.href = this.url_style; 
            document.head.appendChild(style); 
      },
      addWidget: function(data) {
      
            let a, li, ul = document.createElement('ul'); 
            for(var i = 0; i < data.length; i++){ 
                li = document.createElement('li');
                a = document.createElement('a');
                a.setAttribute('href', data[i].href); 
                a.innerHTML = data[i].title;
                a.onclick = this.changeLocation;
                li.appendChild(a); 
                ul.appendChild(li);
            }
            document.getElementById(this.idBox).appendChild(ul);/
      },
        changeLocation: function(e){
            e.preventDefault();
            window.parent.location = this.href; 
        }
  };