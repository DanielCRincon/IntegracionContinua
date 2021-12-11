'use strict'

$(document).ready(function(){
    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 910,
          responsive: true,
          auto: true,
          autoControls: true,
          stopAutoOnClick: true,
          speed: 500      
        });
      });
});