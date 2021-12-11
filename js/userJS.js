'use strict'

$(document).ready(function(){    
    $('.imgUsuario').hide();
    
    

    $('#usuario').blur(function(e){
        e.preventDefault();         
        localStorage.setItem("usuario", $('#usuario').val());        
    });

    

    $('#contrasena').blur(function(e){
        e.preventDefault();        
        localStorage.setItem("password", $('#contrasena').val());    
        
            
        
    });

     //Iniciar Sesion    
    var passW = $('#contrasena').val();
    var btnIngresar = $('#ingresar');   ;
    btnIngresar.click(function(e){        
        e.preventDefault();      

        localStorage.getItem("usuario");
        localStorage.getItem("password");       
       

        if (user != null && user != "undefined" && user != "") {
       
            console.log(localStorage.getItem("usuario"));
            console.log(localStorage.getItem("password"));
            $(location).attr('href', '../index.html');            
            $('.imgUsuario').show();            
            $('#sesion').hide();
            
            
        
        } else{
            (localStorage.getItem(pass));            
            alert('Hay campos vacios');
        }
        
    });

    if(localStorage.getItem("usuario") != null && localStorage.getItem("password") != null){
        $('.imgUsuario').show();        
        $('#sesion').hide();
    }else{

        $('.imgUsuario').hide();        
        $('#sesion').show();

    }

    $('.cerrarSesion').click(function(){        
        localStorage.clear();
        if(window.location.href.indexOf('index') > -1){
            $(location).attr('href', 'index.html');
        } else{
            $(location).attr('href', '../index.html');
        }
    });
});