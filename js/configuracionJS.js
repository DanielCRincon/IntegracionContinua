'use strict'

$(document).ready(function(){

    $('#acordeon').accordion();

    $('.mensaje1').hide();
    $('.mensaje2').hide();
    $('.mensaje3').hide();
    $('#btnGuardar').hide();

    //perfil
    $('#btnActualizar').click(function(e){
        e.preventDefault();
        $('#btnActualizar').hide();
        $('#btnGuardar').show();

        $('#usuario').prop('disabled', false);
        $('#nombre').prop('disabled', false);
        $('#email').prop('disabled', false);
    });

    var user = $('#usuario').val();
    var names = $('#nombre').val();
    var mail = $('#email').val();

    $('#btnGuardar').click(function(e){
        e.preventDefault();         
        $('.mensaje1').show();
        setTimeout(function(){
            $('.mensaje1').hide();
        }, 5000);
        $('#btnActualizar').show();
        $('#btnGuardar').hide();
        $('#usuario').prop('disabled', true);
        $('#nombre').prop('disabled', true);
        $('#email').prop('disabled', true);
    });

    //Cambiar Contraseña
    
    $('#confirmar').blur(function(event){
        event.preventDefault(); 
        var confirmar = $('#confirmar').val();
        var nueva = $('#nueva').val();
        if(confirmar === nueva){
            $('#cambiar').click(function(e){
                e.preventDefault();
                $('.mensaje2').show();
                setTimeout(function(){
                    $('.mensaje2').hide();
                }, 4000);
            }); 
            
        } else {
            alert('La nueva contraseña no coinciden al confirmarla');
                     
        }
        
    });  

    //Eliminar Cuenta
    $('#eliminar').click(function(e){
        e.preventDefault();
        var confirmacion = confirm('Esta seguro de eliminar la cuenta');
        
        if(confirmacion == true){
            $('.mensaje3').show();
            $('.info').show();
            $('.info2').hide();
            setTimeout(function(){
                $(location).attr('href','../index.html');
            }, 3000);
        } else if(confirmacion == false){
            $('.mensaje3').show();
            $('.info2').show();
            $('.info').hide();            
            setTimeout(function(){
                $('.mensaje3').hide();
                $('.info2').hide();
            }, 3000);
        }
    });
});