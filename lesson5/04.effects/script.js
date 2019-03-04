'use strict'

$('#js-show-alert').click(() => {
    //$('#js-alert').show();//afficher
    $('#js-alert').slideDown(); //faire afficher en glissant

    //$('#js-alert').toogle(); afficher/cacher si c'est le meme bouton
});

$('#js-hide-alert').click(() => {
    //$('#js-alert').hide();
    $('#js-alert').slideUp(); //faire cacher en glissant
});



$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
});

$('#js-btn-fade-out').click(() => {
    $('#js-div-fade-in-out').fadeOut();
});


$('#js-animation-1'){
    .delay(1000)
    .animate({
        left: '300px'
    }, 700);
    .animate({
        height: '700px'
    });
}