'use strict'

// Récupérez l'information du profil de Han Solo (son id dans la base de données est 14). 
// Ensuite affichez sur votre page ces données: nom, sexe, date de naissance, couleur des yeux, couleur des cheveux.
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = () => {
    if (xhttp.readyState == 4 && xhttp.status == 200){
        const rawValue = xhttp.responseText; //string 
        const parsedValue = JSON.parse(rawValue);

        const hanSoloInfo = document.createElement('div');
        hanSoloInfo.innerHTML =`
        <p>Nom: ${parsedValue.name}</p>
        <p>Sexe: ${parsedValue.gender}</p>
        <p>Date de naissance: ${parsedValue.birth_year}</p>
    `

    document.body.appendChild(hanSoloInfo);
    }
}
xhttp.oppen('Get','https://swapi.co/api/people/14/',true);
xhttp.send();

// Trouvez toutes les personnes avec le nom de famille Skywalker. Affichez leur profiles sur votre page.
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = () => {
    if (xhttp2.readyState == 4 && xhttp2.status == 200){
    console.log(xhttp2.responseText)
    const rawValue = xhttp2.responseText;
    const parsedValue = JSON.parse(rawValue);

    parsedValue.results.forEach(person =>{
        const personDiv = document.createElement('div')
        personDiv.innerHTML = `
        <hr>
        <p>Nom: ${person.name}</p>
        <p>Sexe: ${person.gender}</p>
        <p>Date de naissance: ${person.birth_year}</p>
    `
    document.body.appendChild(personDiv);
    })
  }
}
    


// Récupérez et affichez les données de 5 planètes avec les ids suivants:

const planets = [1, 2, 3, 4, 5];
// Récupérez l'information du profil de Chewbacca (son id dans la base de données est 13) en format wookiee. Attention les clés json sont également en wookiee. 
// Pour chaque clé json, si la valeur est primitive (string, number, etc), affichez la paire de clé/valeur.


