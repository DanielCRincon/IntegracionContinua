'use strict'

$(document).ready(function(){
    var avanzado = $(".avanzada");
    var oculto = $(".oculto");
    var select = $(".selectores");
    oculto.hide();
    select.hide();

    avanzado.click(function(){
        avanzado.hide();
        oculto.show();
        select.show();
        
    });

    oculto.click(function(){
        avanzado.show();
        oculto.hide();
        select.hide();
        
    });

    

    


});