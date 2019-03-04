



// Récupérez et logguez dans la console le contenu du titre de la page.
const title = $ ('h1').text();
console.log('title',title);

// Changez le contenu du titre de la page à 'My page title'.
$('h1').text('My page title')

// Récupérez et logguez dans la console le HTML de l'article.
const articleContent = $('#js-article').html();
console.log('articleContent', articleContent);

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.
const inputValue = $ ('#js-search')

// Changez la valeur du champ de saisie à 'Beagles'
$('#js-search').val('Beagles');

// search

$('#js-search-form')[0].addEventlistener('submit', (event) => {

    event.preventdefault()
});

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// Changez la valeur du placeholder du champ de saisie à 'Search'

// Utilisez les méthodes append, prepend, before, after, remove, empty pour travailler avec le HTML suivant.

// Ajoutez une balise <h1> avec la valeur 'Cats are the weirdest' dans l'article avec l'id js-article-1.

// Ajoutez une balise <div> dans l'article avec l'id js-article-1.

// Dans la balise <div> de l'article #js-article-1 ajoutez un paragraphe avec la valeur 'He starts to look at me pleadingly, paces around, and meows insistently. He even climbs on top of the book and bites my wrists in protest.'

// Dans la balise <div> de l'article #js-article-1 ajoutez un autre paragraphe avec la valeur 'I recently found out that my cat, Marv, hates it when I read aloud.' avant le paragraphe ajouté précédement.

// Après le premier paragraphe (entre les deux paragraphes) de l'article js-article-1 ajoutez une image.

// Avant l'article #js-article-1 ajoutez un autre article:

// Supprimez le contenu de l'article #js-article-2.

// Supprimez du DOM l'article #js-article-2.


// Part2

// Ajoutez la classe 'alert-primary' au <div>.
$('#js-alert').addClass('alert-primary');

// Supprimez la classe 'alert' du <div>. Supprimez la classe 'alert-primary' du <div>.
$('#js-alert').removeClass('alert-primary');

// Ajoutez d'un coup les classes 'alert' et 'alert-warning' au <div>.
$('#js-alert').addClass('alert alert-warning');

// Vérifiez si le <div> possède déjà la classe 'alert-warning'. Si oui, supprimez-la.
$('#js-alert').hasClass('alert-warning');

// En cliquant sur le bouton #js-btn, basculez la classe 'alert-success': premier clique ajoute la classe, deuxième clique l'enlève, troisième l'ajoute de nouveau, etc.

$('#js-btn')[0].addEventlistener('click', () => {
    
    $('#js-alert').toggleClass('alert-success');

})

// Récupérez et logguez dans la console la couleur du fond du bouton.
console.log($('#js-btn').css('background-color'));

// Passez la couleur du fond du bouton en #71b8af.
$('#js-btn').css('background-color', '#71b8af');

// Changez d'un coup la couleur du texte du bouton à #fff2d5 et le radius de la bordure à 3px.
$('#js-btn').css({
    color: '#fff2d5',
    'border-radius': '100%'
});

// hide alert 
$('#js-btn')[0].addEventlistener('click', () => {

    $('#js-alert').addClass('alert-danger ');
    
    $('#js-alert').toggleClass('alert-danger');

    $('#js-alert').hasClass('alert-danger');

    $('#js-alert').addClass('text-danger ');


})















