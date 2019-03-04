// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.

document.querySelector('#btn').addEventListener('click', () => {});// JS
$('#btn').on('click', () => {});
$('#btn').click(() => {});


$('#js-hovered').mouseenter(() => {
    changeBgColor('green')
});

$('#js-hovered').mouseleave(() => {
    changeBgColor('blue')
})

function changeBgColor(color) {
    $('#js-hovered').css('background-color', color);
}

// tooltip
