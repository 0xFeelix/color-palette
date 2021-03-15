$('.palette-colors li').click(function(){

    $('body').attr('data-default-color', $(this).data('color'));
    $('.palette-colors li').removeClass('current-color');
    $(this).addClass('current-color')
  });

$('.color-palette i').click(function(){
    $('.palette-colors').toggleClass('active-palette');
})