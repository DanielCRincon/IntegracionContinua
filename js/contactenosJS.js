'use strict'

$(document).ready(function(){

    $('.mensaje').hide();

    var nombre = $('#nombre').val();
    var email = $('#email').val();
    var movil = $('#movil').val();
    var asunto = $('#asunto').val();
    var message = $('#mensajes').val();

    if(nombre != " " && email != " " && movil != " " && asunto != " " && message != " "){
        $('#nombre').blur(function(event){
            event.preventDefault();                         
            $('#email').blur(function(event){
                if(this.value.indexOf("@") < 0) {
                    window.confirm('El correo le hace falta el @');
                }
                event.preventDefault();                                     
                $('#movil').blur(function(event){
                    if(this.value.length > 10){
                        alert('El número celular solo tiene 10 digitos');
                    }
                    event.preventDefault();                                                                 
                    $('#asunto').blur(function(event){                            
                        event.preventDefault();
                        $('#mensajes').blur(function(event){
                            event.preventDefault();
                            $('#enviar').prop('disabled', false);                                              
                         });
                    });  
                });
            });
        });

        $('#enviar').click(function(e){
            e.preventDefault();
            $('.mensaje').show();
            setTimeout(function() {
                $('.mensaje').hide(); 
            }, 7000); 
        });
        
     } else{

        
         
     }

    

});