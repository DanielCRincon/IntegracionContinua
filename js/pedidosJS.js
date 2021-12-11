'use strict'

$(document).ready(function(){

    let titulo = document.createElement('tr');
    let titulo1 = document.createElement('th');
    titulo1.classList.add('titulosP');
    titulo1.innerHTML = "Información del Pedido";
    let titulo2 = document.createElement('th');
    titulo2.classList.add('titulosP');
    titulo2.innerHTML = "Descripción";
    let titulo3 = document.createElement('th');
    titulo3.classList.add('titulosP');
    titulo3.innerHTML = "Estado del Pedido";

    titulo.append(titulo1, titulo2, titulo3);


    const tabla = $('#tablePedido');
    tabla.append(titulo);

    var index;

    for(index in pedidosCompras){
        let tr = document.createElement('tr');
        let contenido = document.createElement('td');
        contenido.classList.add('contenido');
        let h4 = document.createElement('h4');
        h4.innerHTML = pedidosCompras[index].titulo;
        let img = document.createElement('img');
        img.classList.add('images');
        img.append(pedidosCompras[index].url);
        img.src = '../'+pedidosCompras[index].url;
        let descripcion = document.createElement('td');        
        let descripcionP = document.createElement('p');
        descripcionP.classList.add('descripcion');
        descripcionP.innerHTML = pedidosCompras[index].descripcion;
        let estado = document.createElement('td');
        let p = document.createElement('p');
        p.classList.add('estado');
        p.innerHTML =  pedidosCompras[index].estado;

        contenido.append(h4, img);
        descripcion.append(descripcionP);
        estado.append(p);
        tr.append(contenido, descripcion, estado);
        tabla.append(tr);   
    } 
});