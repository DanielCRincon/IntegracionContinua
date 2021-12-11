'use strict'

$(document).ready(function(){
    if (typeof(Storage) !== "undefined") {
        console.log('Su Navegador es compatible con el LocalStorage')
    } else {
        alert('Su navegador no es compatible con el LocalStorage, por lo tanto, Busqueda, Iniciar Sesion No funcionaran.')
    }
    
    // desplegar busqueda avanzada
    var avanzado = $(".avanzada");
    var oculto = $(".oculto");
    var select = $(".selectores");
    var filtros = $("#filters");
    oculto.hide();
    select.hide();
    filtros.hide();

    avanzado.click(function(){
        avanzado.hide();
        $('#busquedaBasica').prop('disabled', true);
        oculto.show();
        select.show();
        btnBusqueda.hide();
        filtros.show();
        
    });

    oculto.click(function(){
        avanzado.show();
        $('#busquedaBasica').prop('disabled', false);
        oculto.hide();
        select.hide();
        btnBusqueda.show();
        filtros.hide();
        
    });

    var btnBusqueda = $('.ButtonSearch');  
    
    //Busqueda Basica.
    var busqueda = $('#busquedaBasica').val();
	
    btnBusqueda.click(function(e){	
        e.preventDefault();
        localStorage.removeItem("busquedaGenero");
        localStorage.removeItem("busquedaIdioma");
        localStorage.removeItem("busquedaConsola");
        
        if(window.location.href.indexOf('index') > -1){
            if(busqueda == " "){        
                alert("No hay elemento busqueda");  
            } else{
                $(location).attr('href', 'html/busqueda.html');
                localStorage.setItem("busqueda", ($('#busquedaBasica').val()));                
            }
        } else{            
            if(busqueda == " "){        
                alert("No hay elemento busqueda");   
            } else{                              
                $(location).attr('href', '../html/busqueda.html');
                localStorage.setItem("busqueda", $('#busquedaBasica').val());  
            }
        }
    });       
   
    //Busqueda avanzada
    filtros.click(function(e){
        e.preventDefault();
        localStorage.removeItem("busqueda");
        localStorage.removeItem("busquedaGenero");
        localStorage.removeItem("busquedaIdioma");
        localStorage.removeItem("busquedaConsola");

        var genero = $('#genero').val();
        var idioma = $('#idioma').val();
        var consola = $('#consola').val();       
        
        if(window.location.href.indexOf('index') > -1){
            if(genero != '#' && idioma == '#' && consola == '#') {
                $(location).attr('href', 'html/busqueda.html');
                localStorage.setItem("busquedaGenero", $('#genero').val());  

            } else if (genero == '#' && idioma != '#' && consola == '#'){                              
                $(location).attr('href', 'html/busqueda.html');
                localStorage.setItem("busquedaIdioma", $('#idioma').val());  
                
            } else if(genero == '#' && idioma == '#' && consola != '#'){
                $(location).attr('href', 'html/busqueda.html');                
                localStorage.setItem("busquedaConsola", $('#consola').val()); 
                

            } else{
                alert('Solo puede escoger un elemento de Busqueda avanzada');
            }
        }else {
            if (genero != '#' && idioma == '#' && consola == '#') {
                $(location).attr('href', '../html/busqueda.html');
                localStorage.setItem("busquedaGenero", $('#genero').val());   

            } else if (genero == '#' && idioma != '#' && consola == '#'){
                
                $(location).attr('href', '../html/busqueda.html');
                localStorage.setItem("busquedaIdioma", $('#idioma').val());  
                
            } else if (genero == '#' && idioma == '#' && consola != '#'){
                $(location).attr('href', '../html/busqueda.html');
                localStorage.setItem("busquedaConsola", $('#consola').val()); 

            }  else{
                alert('Solo puede escoger un elemento de Busqueda avanzada');
            }
        }
    });

});