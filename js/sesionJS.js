'use strict'

$(document).ready(function(){
    $('#tabs').tabs();
    // Registrarse
    var usuario =$('#usuario').val();
    var nombre =  $('#nombre').val();
    var mail = $('#email').val();
    var pass = $('#passw').val();
    var conf = $('#passwconf').val();  
    var fecha = $('#nacimiento').val();   
      
    $('.mensaje').hide();      

    if (usuario != null && nombre != " " && mail != " " && pass != " " && conf != " " && fecha != null){
        $('#usuario').blur(function(event){
            event.preventDefault();
            setTimeout(function() {
                $('.informacion').hide();  
            }, 5000); 
            $('#nombre').blur(function(event){
                event.preventDefault();                
                $('#email').blur(function(event){
                    event.preventDefault();                    
                    $('#passw').blur(function(event){
                        event.preventDefault();                                              
                        $('#passwconf').blur(function(event){                            
                            event.preventDefault(); 
                            let contrasena = $('#passw').val();
                            let confContrasena = $('#passwconf').val(); 
                            if(confContrasena === contrasena ){
                                $('#enviar').prop('disabled', false);
                                $('.importante').hide();                                 
                            } else {
                                alert('Las contraseñas no coinciden');                                
                            }  
                        });
                    });
                    
                });
                
            });
            
        });
    }
    var enviar = $('#enviar');
    enviar.click(function(e){
        e.preventDefault();
        $('.mensaje').show();  
        setTimeout(function() {
            $('.mensaje').hide(); 
        }, 5000);  
        setTimeout(() => {
            location.reload();
        }, 5000); 
    
    });
   

});