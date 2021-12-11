'use strict'

$(document).ready(function(){

    var contenido = $('.contenido');
    var index;
    console.log(localStorage.getItem("detallesOferta"));

    for(index in ofertas){
        var local = parseInt(localStorage.getItem("detallesOferta"));
        var gen = ofertas[index].genero;
        var consol = ofertas[index].consola;
        var idiomas = ofertas[index].idioma;

        if(ofertas[index].idOfertas === local){
            var juego = document.createElement('div');
            juego.classList.add('juegos');
            var image = document.createElement('img');
            image.classList.add('imagen');
            var info = document.createElement('div');
            info.classList.add('informacion');
            var titulo = document.createElement('h3');
            titulo.innerHTML = ofertas[index].titulo;
            var hr1 = document.createElement('hr');
            var descripcion = document.createElement('div');
            descripcion.classList.add('descripcion');
            var p = document.createElement('p');
            p.innerHTML = ofertas[index].descripcion;
            var hr2 = document.createElement('hr');
            var datos = document.createElement('div');
            datos.classList.add('datos');
            var genero = document.createElement('div');
            genero.classList.add('genero');
            var h41 = document.createElement('h4');
            h41.innerHTML = "Generos";
            var ul1 = document.createElement('ul');
            for(var i in gen){
                var list = document.createElement('li');
                list.innerHTML = gen[i];
                ul1.append(list); 
            }
            var idioma = document.createElement('div');
            idioma.classList.add('idioma');
            var h42 = document.createElement('h4');
            h42.innerHTML = "Idiomas";
            var ul2 = document.createElement('ul');
            for(var j in idiomas){
                var list2 = document.createElement('li');
                list2.innerHTML = idiomas[j];
                ul2.append(list2);
            }
            var hr3 = document.createElement('hr');
            var consola = document.createElement('div');
            consola.classList.add('consolas');
            var h43 = document.createElement('h4');
            h43.innerHTML = "Seleccione el tipo de consola";
            var ul3 = document.createElement('ul');
            for(var k in consol){
                var list3 = document.createElement('li');
                var input = document.createElement('input');
                input.type = 'checkbox';
                input.value = consol[k];
                var span = document.createElement('span');
                span.innerHTML = consol[k];
                list3.append(input, span);
                ul3.append(list3);                
            }
            var hr4 = document.createElement('hr');
            var valores = document.createElement('div');
            valores.classList.add('valores');
            var cantidad = document.createElement('div');
            cantidad.classList.add('cantidad');
            var h44 = document.createElement('h4');
            h44.innerHTML = "Cantidad";
            var number = document.createElement('input');
            number.type = 'number';
            number.value = 1;
            var valor = document.createElement('div');
            valor.classList.add('valor');
            var h45 = document.createElement('h4');
            h45.innerHTML = "Valor"
            var valorText = document.createElement('label');
            // valorText.prop('readonly', true);
            valorText.innerHTML = '$ ' + ofertas[index].precio;
            var oferta = document.createElement('div');
            oferta.classList.add('oferta');
            var h46 = document.createElement('h4');
            h46.innerHTML = "Descuento";
            var ofertaText = document.createElement('label');
            // ofertaText.prop('readonly', true);
            ofertaText.innerHTML ='$ ' + ofertas[index].descuento;
            var hr5 = document.createElement('hr');
            var boton = document.createElement('div');
            boton.classList.add('btn');
            var button = document.createElement('button');
            var spanIcon = document.createElement('span');
            spanIcon.classList.add('icon-cart');
            button.innerHTML = "Agregar al carrito";
            button.classList.add('button');
            button.append(spanIcon);
            boton.append(button);
            oferta.append(h46, ofertaText);
            valor.append(h45, valorText);
            cantidad.append(h44, number);
            valores.append(cantidad, valor, oferta);
            consola.append(h43, ul3);
            idioma.append(h42, ul2);
            genero.append(h41, ul1);
            datos.append(genero, idioma);
            descripcion.append(p);

            image.append(ofertas[index].url);
            image.src = '../'+ofertas[index].url;
            juego.append(image);
            info.append(titulo, hr1, descripcion, hr2, datos, hr3, consola, hr4, valores, hr5, boton);
            contenido.append(juego, info);
            
            
        }

    }

    $('.button').click((e) =>{
        e.preventDefault();
        if(confirm('Sera redirigido al carrito de compras') == true){
            $(location).attr('href', 'carritoCompras.html');
        }
       
    });

});