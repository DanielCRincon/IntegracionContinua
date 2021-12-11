'use strict'

$(document).ready(function(){     
    
    var contenido = $('.contenido');
    var index;
    console.log(localStorage.getItem("caracteristicas"));
    for(index in videoJuegos){
        var local =  parseInt(localStorage.getItem("caracteristicas"));
        var platforms = videoJuegos[index].consola;
        var languages = videoJuegos[index].idioma;

        if(videoJuegos[index].id === local){
            
            var juego = document.createElement('div');
            juego.classList.add('juegos');
            var img = document.createElement('img');
            img.classList.add('imagen');
            var info = document.createElement('div');
            info.classList.add('informacion');
            var descrip = document.createElement('div');
            descrip.classList.add('descripcion');
            var h3 = document.createElement('h3');
            h3.innerHTML = videoJuegos[index].titulo;
            var h4 = document.createElement('h4');
            h4.innerHTML = 'Descripción:';
            var p = document.createElement('p');
            p.innerHTML = videoJuegos[index].descripcion;
            var consolas = document.createElement('div');
            consolas.classList.add('plataformas');
            var h4_2 = document.createElement('h4');
            h4_2.innerHTML = "Consolas";
            var ul_1 = document.createElement('ul');
            for(var i in platforms){
                var li_1 = document.createElement('li');
                li_1.innerHTML= platforms[i];
                console.log(platforms[i]);
                ul_1.append(li_1);
            }
            var langs = document.createElement('div');
            langs.classList.add('lenguaje');
            var h4_3 = document.createElement('h4');
            h4_3.innerHTML= 'Idiomas';
            var ul_2 = document.createElement('ul');
            for(var j in languages){
                var li_2 = document.createElement('li');
                li_2.innerHTML= languages[j];
                console.log(languages[j]);
                ul_2.append(li_2);
            }
            langs.append(h4_3, ul_2);
            consolas.append(h4_2, ul_1);
            descrip.append(h3, h4, p);
            img.append(videoJuegos[index].url);          
            img.src = '../'+videoJuegos[index].url;
            juego.append(img);
            info.append(descrip, consolas, langs);
            contenido.append(juego, info);
        }
    }

});