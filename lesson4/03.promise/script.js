'use strict';

// Créez une promise (promesse) qui retourne une chaîne de caractères 'Hello' immediatement. Récupérez et logguez la valeur qu'elle retourne.
const myPromise = new Promise((resolve, reject) => {
    if (5>3) {
        setTimeout(() => {
            resolve('Hello');
        }, 10000)
    } else {
        reject('error!')
    }
});

myPromise
    .then(result => console.log(result))
    .catch(error => console(error));



// Créez une promise qui retourne une chaîne de caractères 'Hello' dans 3 secondes. Récupérez et logguez la valeur qu'elle retourne.

// Créez une promise qui retourne une erreur 'Something went wrong!'. Récupérer et logguez cette erreur.

// Créez une promise qui retourne un nombre N. Enchaînez le traitement de la promise pour effectuez les operations suivantes:
// multiplier N par 2
// ensuite soustraire 1
// ensuite decrementer de 2
// ensuite augmenter de 10. Logguez le résultat réçu.

const getNum = new Promise((resolve, reject) => {
    resolve(10);
});
getNum
    .then(num => {
        return num * 2;
    })
    .then(num => {
        return num - 1;

    })
    .then(res => {
        console.log('res', res);
    })
    .then(err => {
        console.log('err', err);
        
    })
// Créez une fonction qui prend un nombre comme parametre et qui retourne une promise. Si le nombre passé est supérieur à 5 la promise est résolue avec succès, 
// sinon la promise retourne une erreur 'Le nombre passé est trop grand'. Appelez la fonction créée et récupérez la valeur retournée par la promise.

const myPrms = () => {
    return new Promise((resolve,reject) => {
        if (num > 5) {
            return resolve;
        } else {
            return 'Le nombre est trop grand'
        }
    })
}

myPrms(7)
    // get value
    //get error



fetch('https://jsonplaceholder.typicode.com/posts/25')
    .then(reponse => reponse.json())
    .then(result => {
        console.log('result' , result);
    })