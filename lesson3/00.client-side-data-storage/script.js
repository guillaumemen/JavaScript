'use strict';

//Créez un cookie lang égal à 'fr'.
document.cookie = 'lang=fr';

//Créez un cookie previewSeen égal à true qui va expirer le lendement.
document.cookie = `lang=fr;expire=${new Date('2019-02-12')}`;

//Créez un cookie test égal à 'test' qui va expirer le 31 décembre 2019.
docCookies.setItem('test', 'test', new Date('2019-12-31'));

//Créez un cookie userId égal à 123
docCookies.setItem('userId', 123);
console.log(typeof docCookies.getItem('userId'));

//Récupérez et loggez les valeurs des cookies lang, previewSeen et userId
docCookies.setItem('userId', 321);

//Modifiez la valeur du cookie userId à 321.
console.log(docCookies.getItem('lang'))
console.log(docCookies.getItem('previewSeen'))
console.log(docCookies.getItem('userID'))
console.log(docCookies.getItem('studentId'))

//store an object
docCookies.setItem('testObject', JSON.stringify({id: 1}));
//Get an object //
const myObj = docCookies.getItem('testObject');
console.log('myObj', myObj);
console.log('myObj parsed', JSON.parse(myObj))

//Supprimez le cookie test.
docCookies.removeItem('test');
docCookies.setItem('test', '', new Date('2000.01.01'));



//LOCAL STORAGE 


//Vérifiez si l'objet SessionStorage est supporté par le navigateur.
if (localStorage){
//Créez une entrée posts égale à [{id: 0}, {id: 1}, {id: 2}].
localStorage.setItem('greeting', 'Hello World');
//Créez une entrée userId égale au nombre 123.
localStorage.setItem('adIds', JSON.stringify({top: 1, bottom: 2}));

//Récupérez posts.
console.log(localStorage.getItem('greeting'));
//Modifiez cette entrée à [{id: 321}, {id: 1}, {id: 2}].
localStorage.setItem('greeting', 'Welcome');
//Supprimez userId du SessionStorage.
localStorage.removeItem('greeting');

//delete all entries
localStorage.clear();
}