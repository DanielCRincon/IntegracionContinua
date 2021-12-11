'use strict'

$(document).ready(function(){
   
    //Generar dinamicamente VideoJuegos Index
    var divs = $('.content'); // cambiar por content
    var i;

    var juego = document.createElement('div');
        juego.classList.add('juego');    
    for ( i = 0; i <= 2; i++) {        
        var card = document.createElement('div');
        card.classList.add('card');
        var imagen = document.createElement('img');
        imagen.classList.add('img');
        var cardInfo = document.createElement('div');
        cardInfo.classList.add('card-info')
        var h3 = document.createElement('h3');
        h3.innerHTML = videoJuegos[i].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = videoJuegos[i].descripcion;
        var more = document.createElement('button');
        more.classList.add('more'+[i]);
        more.innerHTML = "Más Información";
        var comprar = document.createElement('button');
        comprar.classList.add('comprar'+[i]);
        comprar.innerHTML = "Comprar";
        divs.append(juego);
            
        imagen.append(videoJuegos[i].url);
        // $('.img').attr('src', imagen);   
        imagen.src = videoJuegos[i].url;
        juego.append(card);
        card.append( imagen, cardInfo);        
        cardInfo.append(h3, h4, p, more, comprar);        
        
    }
    for(let i =  0 ; i < videoJuegos.length; i++){
        
        $('.more'+[i]).click((e) => {
            for(var index in videoJuegos){                
                if(videoJuegos[index].id == [i]){
                    $(location).attr('href', 'html/caracteristicasVideoJuegos.html');
                    localStorage.setItem("caracteristicas",videoJuegos[index].id);
                }
            }                          
    
        });
    }    
        
    
    // Comprar VideoJuegos
    
    for(let j =  0 ; j < videoJuegos.length; j++){
            
        $('.comprar'+[j]).click((e) => {
            for(var index in videoJuegos){                
                if(videoJuegos[index].id == [j]){
                    $(location).attr('href', 'html/detallesVideoJuegos.html');
                    localStorage.setItem("detalles",videoJuegos[index].id);
                }
            }
                            
    
        });
    }
    

    //Generar dinamicamente Ofertas Index
    var contenido = $('.content-2'); // cambiar por content
    var index;

    var juego2 = document.createElement('div');
        juego2.classList.add('juego-2');    
    for ( index = 0; index <= 2; index++) {        
        var card2 = document.createElement('div');
        card2.classList.add('card-2');
        var imagen2 = document.createElement('img');
        imagen2.classList.add('img-2');
        var cardInfo2 = document.createElement('div');
        cardInfo2.classList.add('card-info-3')
        var h3 = document.createElement('h3');
        h3.innerHTML = ofertas[index].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = ofertas[index].descripcion;
        var more2 = document.createElement('button');
        more2.classList.add('more_2'+[index]);
        more2.innerHTML = "Más Información";
        var comprar2 = document.createElement('button');
        comprar2.classList.add('comprar_2'+[index]);
        comprar2.innerHTML = "Comprar"; 
        contenido.append(juego2);
        // $('.img-2').attr('src', imagen2);
        imagen2.append(ofertas[index].url);
        imagen2.src = ofertas[index].url;
        juego2.append(card2);
        card2.append( imagen2, cardInfo2);        
        cardInfo2.append(h3, h4, p, more2, comprar2);        

    }

    //Boton más información
    for(let i = 0 ; i < ofertas.length; i++){
        
        $('.more_2'+[i]).click((e) => {
            e.preventDefault();
            for(var index in ofertas){                
                if(ofertas[index].idOfertas == [i]){
                    $(location).attr('href', 'html/caracteristicasOfertas.html');
                    localStorage.setItem("caracteristicasOferta", ofertas[index].idOfertas);
                }
            }
        });
    } 

    for(let j = 0 ; j < ofertas.length; j++){        
        $('.comprar_2'+[j]).click((e) => {
            e.preventDefault();
            for(var index in ofertas){                
                if(ofertas[index].idOfertas == [j]){
                    $(location).attr('href', 'html/detallesOfertas.html');
                    localStorage.setItem("detallesOferta", ofertas[index].idOfertas);
                }
            }
        });
    } 

 //Generar dinamicamente Nuevo Index
    var content = $('.content-3'); // cambiar por content
    var j;
 
    var juego3 = document.createElement('div');
         juego3.classList.add('juego-3');    
    for ( j = 0; j <= 2; j++) {        
        var card3 = document.createElement('div');
        card3.classList.add('card-3');
        var imagen3 = document.createElement('img');
        imagen3.classList.add('img-3');
        var cardInfo3 = document.createElement('div');
        cardInfo3.classList.add('card-info-3')
        var h3 = document.createElement('h3');
        h3.innerHTML = nuevo[j].titulo;
        var h4 = document.createElement('h4');
        h4.innerHTML= "Descripción:";
        var p = document.createElement('p');
        p.innerHTML = nuevo[j].descripcion;                     
        content.append(juego3);
        
        imagen3.append(nuevo[j].url);
        imagen3.src = nuevo[j].url;
        juego3.append(card3);
        card3.append( imagen3, cardInfo3);        
        cardInfo3.append(h3, h4, p);        
 
     }   
 });


       