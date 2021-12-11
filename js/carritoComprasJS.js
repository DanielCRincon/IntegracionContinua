'use strict'

$(document).ready(function(){
    $('.pagar').click((e) =>{
        if(confirm('En un momento sera redirigido a la plataforma de pago') == true){
            $(location).attr('href', 'pedidos.html');
        }
    });
});