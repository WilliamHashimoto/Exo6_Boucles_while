//Exo1

// let prenoms = ["Kevin", "Loic", "Alain", "Andy", "Ilyas", "Mohammed", "Dorian", "Farhad", "Tania"];

// let i = 0;

// while (i < 9) {
//     console.log("Bonjour " + prenoms[i]);
//     i++;
// }

// Exo2

// let fruits = ["Pommes", "Pêches", "Bananes", "Ananas", "Poires", "Mangue"];

// while (fruits.length != 0) {
//     fruits.pop();  
//     console.log(fruits);
// }

// Exo3
// let panierLegumes = ["aubergine", "carottes", "broccoli", "chicon"];
// let longueur = panierLegumes.length;
// let caisseLegumes = [];

// while (caisseLegumes.length != longueur) {
//     caisseLegumes.push(panierLegumes[0]);
//     panierLegumes.shift()
//     console.log(panierLegumes);
//     console.log(caisseLegumes);
// }

// Exo4
// let enigme = prompt("Rentrez blanc en hexadécimal");

// while (enigme.toLowerCase() != "#ffffff" && enigme.toLowerCase() != "#fff") {
//     prompt("Mauvaise réponse, réessayez");
// }

// alert("Félicitations, vous avez trouvé!");

// Exo5
// let enigme = prompt("Rentrez blanc en hexadécimal");

// do {
//     if (enigme.toLowerCase() == "#ffffff" || enigme.toLowerCase() == "#fff") {
//         alert("Félicitations, vous avez trouvé!");
//     } else {
//         prompt("Mauvaise réponse, réessayez");
//     }

// } while (enigme.toLowerCase() != "#ffffff" && enigme.toLowerCase() != "#fff");

//Exo6
// let annee = 2021;
// let aleatoire = 1970 + Math.ceil(Math.random() * 48);
// let age = annee - aleatoire;
// let reponse = prompt(`Si je suis né en ${aleatoire}, quel age ai-je aujourd'hui?`);

// let i = 0

// while (i<2 && reponse != age) {
//     prompt(`Mauvaise réponse. Si je suis né en ${aleatoire}, quel age ai-je aujourd'hui?`);
//     i++;
// }

// if (reponse == age) {
//     alert("Félicitations, vous avez trouvé!")
// }
// else {
//     alert("Dommage");
// }

// Exo7

let fruits = [];

while (fruits.length<3) {
    fruits.push(prompt("Ajoutez un fruit à votre panier"));
}

console.log(fruits);

let retrait = prompt("Voulez-vous retirer un fruit?");

while (fruits.indexOf(retrait) != -1) {
    fruits.splice(fruits.indexOf(retrait), 1);
    retrait = prompt("Voulez-vous retirer un fruit? Si oui, lequel?");
}

alert("Merci, bon appétit");

i = 0;
while (i < fruits.length) {
    fruits[i] = fruits[i].charAt(0).toUpperCase() + fruits[i].substr(1);
    i++
}

console.log(fruits);