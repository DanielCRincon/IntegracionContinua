'use strict'

$(document).ready(function(){
    //Mostrar todos las ofertas

    var contenido = $('.content');
    var juego = document.createElement('div');
    juego.classList.add('juego');

    var index;

    for(index in ofertas){
        var card = document.createElement('div');
        card.classList.add('card');
        var imagen = document.createElement('img');
        imagen.classList.add('img');
        var cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info')
        var h3 = document.createElement('h3');
        h3.innerHTML = ofertas[index].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = ofertas[index].descripcion;
        var more = document.createElement('button');
        more.classList.add('more'+[index]);
        more.innerHTML = 'Más Información';
        var comprar = document.createElement('button');
        comprar.classList.add('comprar'+[index]);
        comprar.innerHTML = "Comprar";            
        contenido.append(juego);
            
        imagen.append(ofertas[index].url);
        imagen.src = '../'+ofertas[index].url;
        juego.append(card);
        card.append( imagen, cardInfo);        
        cardInfo.append(h3, h4, p, more, comprar);
    }
    
    //Boton más información
    for(let i = 0 ; i < ofertas.length; i++){
        
        $('.more'+[i]).click((e) => {
            e.preventDefault();
            for(var index in ofertas){                
                if(ofertas[index].idOfertas == [i]){
                    $(location).attr('href', 'caracteristicasOfertas.html');
                    localStorage.setItem("caracteristicasOferta", ofertas[index].idOfertas);
                }
            }
        });
    } 

    for(let j = 0 ; j < ofertas.length; j++){        
        $('.comprar'+[j]).click((e) => {
            e.preventDefault();
            for(var index in ofertas){                
                if(ofertas[index].idOfertas == [j]){
                    $(location).attr('href', 'detallesOfertas.html');
                    localStorage.setItem("detallesOferta", ofertas[index].idOfertas);
                }
            }
        });
    }   


});