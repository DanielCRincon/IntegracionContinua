'use strict'

$(document).ready(function(){
    //Mostrar todos los videojuegos

    var contenido = $('.content');
    var juego = document.createElement('div');
    juego.classList.add('juego');

    var index;

    for(index in videoJuegos){        
        var card = document.createElement('div');
        card.classList.add('card');
        var imagen = document.createElement('img');
        imagen.classList.add('img');
        var cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info')
        var h3 = document.createElement('h3');
        h3.innerHTML = videoJuegos[index].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = videoJuegos[index].descripcion;
        var more = document.createElement('button');
        more.classList.add('more'+[index]);
        more.innerHTML = 'Más Información';
        var comprar = document.createElement('button');
        comprar.classList.add('comprar'+[index]);
        comprar.innerHTML = "Comprar";              
        contenido.append(juego);

        imagen.append(videoJuegos[index].url);
          
        imagen.src = '../'+videoJuegos[index].url;
        juego.append(card);
        card.append( imagen, cardInfo);        
        cardInfo.append(h3, h4, p, more, comprar);
    }

//Boton más información
for(let i =  0 ; i < videoJuegos.length; i++){
        
    $('.more'+[i]).click((e) => {
        for(var index in videoJuegos){                
            if(videoJuegos[index].id == [i]){
                $(location).attr('href', 'caracteristicasVideoJuegos.html');
                localStorage.setItem("caracteristicas",videoJuegos[index].id);
            }
        }
                        

    });
}    
    

// 

for(let j =  0 ; j < videoJuegos.length; j++){
        
    $('.comprar'+[j]).click((e) => {
        for(var index in videoJuegos){                
            if(videoJuegos[index].id == [j]){
                $(location).attr('href', 'detallesVideoJuegos.html');
                localStorage.setItem("detalles",videoJuegos[index].id);
            }
        }
                        

    });
}
    
});

