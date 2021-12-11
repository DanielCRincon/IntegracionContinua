'use strict'

$(document).ready(function(){

var contenido = $('.content');
var juego = document.createElement('div');
juego.classList.add('juego');

//Busqueda Basica
var busquedas = (localStorage.getItem("busqueda"));

var index;
for(index in todos){
    
    if(todos[index].titulo == busquedas || todos[index].anio == busquedas || todos[index].precio == busquedas){
        var card = document.createElement('div');
        card.classList.add('card');
        var imagen = document.createElement('img');
        imagen.classList.add('img');
        var cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info')
        var h3 = document.createElement('h3');
        h3.innerHTML = todos[index].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = todos[index].descripcion;
        var more = document.createElement('button');
        more.classList.add('more'+[index]);
        more.innerHTML = "Más Información";
        var comprar = document.createElement('button');
        comprar.classList.add('comprar'+[index]);
        comprar.innerHTML = "Comprar";        
        contenido.append(juego);
            
        imagen.append(todos[index].url);
        // $('.img').attr('src', imagen);   
        imagen.src = '../'+todos[index].url;
        juego.append(card);
        card.append( imagen, cardInfo);        
        cardInfo.append(h3, h4, p, more, comprar);
    }   
        
}

//busqueda Avanzada
var busquedaIdioma = (localStorage.getItem("busquedaIdioma"));
var busquedaGenero = (localStorage.getItem("busquedaGenero"));
var busquedaConsola = (localStorage.getItem("busquedaConsola"));
var i;
var j;
var k;
var l;

for(i in todos){ 
    var genero = todos[i].genero;
    for (j in genero){                
        if(genero[j] == busquedaGenero){        
            var card = document.createElement('div');
            card.classList.add('card');
            var imagen = document.createElement('img');
            imagen.classList.add('img');
            var cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info')
            var h3 = document.createElement('h3');
            h3.innerHTML = todos[i].titulo;
            var h4 = document.createElement('h4');
            h4.innerHTML= "Descripción:";
            var p = document.createElement('p');
            p.innerHTML = todos[i].descripcion;
            var more = document.createElement('button');
            more.classList.add('more'+todos[i].idAll);
            more.innerHTML = "Más Información";            
            var comprar = document.createElement('button');
            comprar.classList.add('comprar'+todos[i].idAll);
            comprar.innerHTML = "Comprar";                   
            contenido.append(juego);
                
            imagen.append(todos[i].url);          
            imagen.src = '../'+todos[i].url;
            juego.append(card);
            card.append( imagen, cardInfo);        
            cardInfo.append(h3, h4, p, more, comprar);

        }         
    }
}

for(i in todos){     
    var idioma = todos[i].idioma;    
    for (k in idioma){                
        if(idioma[k] == busquedaIdioma){                 
            var card = document.createElement('div');
            card.classList.add('card');
            var imagen = document.createElement('img');
            imagen.classList.add('img');
            var cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info')
            var h3 = document.createElement('h3');
            h3.innerHTML = todos[i].titulo;
            var h4 = document.createElement('h4');
            h4.innerHTML= "Descripción:";
            var p = document.createElement('p');
            p.innerHTML = todos[i].descripcion;
            var more = document.createElement('button');
            more.classList.add('more'+todos[i].idAll);
            more.innerHTML = "Más Información";
            var comprar = document.createElement('button');
            comprar.classList.add('comprar'+todos[i].idAll);
            comprar.innerHTML = "Comprar";        
            contenido.append(juego);
                
            imagen.append(todos[i].url);          
            imagen.src = '../'+todos[i].url;
            juego.append(card);
            card.append( imagen, cardInfo);        
            cardInfo.append(h3, h4, p, more, comprar);

        }         
    }
}

for(i in todos){     
    var consola = todos[i].consola;    
    for (l in consola){                
        if(consola[l] == busquedaConsola){ 
            var card = document.createElement('div');
            card.classList.add('card');
            var imagen = document.createElement('img');
            imagen.classList.add('img');
            var cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info')
            var h3 = document.createElement('h3');
            h3.innerHTML = todos[i].titulo;
            var h4 = document.createElement('h4');
            h4.innerHTML= "Descripción:";
            var p = document.createElement('p');
            p.innerHTML = todos[i].descripcion;
            var more = document.createElement('button');
            more.classList.add('more'+todos[i].idAll);
            more.innerHTML = "Más Información";
            var comprar = document.createElement('button');
            comprar.classList.add('comprar'+todos[i].idAll);
            comprar.innerHTML = "Comprar";        
            contenido.append(juego);
                
            imagen.append(todos[i].url);          
            imagen.src = '../'+todos[i].url;
            juego.append(card);
            card.append( imagen, cardInfo);        
            cardInfo.append(h3, h4, p, more, comprar);

        }         
    }
}

    //Boton más información
    for(let i = 0 ; i < todos.length; i++){
        
        $('.more'+[i]).click((e) => {
            e.preventDefault();
            for(var index in todos){                
                if(todos[index].idAll == [i]){
                    $(location).attr('href', 'caracteristicasBusqueda.html');
                    localStorage.setItem("caracteristicasBusqueda",todos[index].idAll);
                }
            }
        });
    } 

    for(let j = 0 ; j < todos.length; j++){
        
        $('.comprar'+[j]).click((e) => {
            e.preventDefault();
            for(var index in todos){                
                if(todos[index].idAll == [j]){
                    $(location).attr('href', 'detallesBusqueda.html');
                    localStorage.setItem("detallesBusqueda",todos[index].idAll);
                }
            }
        });
    } 
});