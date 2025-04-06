let nb_aleatoire = parseInt(Math.floor(Math.random() * 1001)); // génération d'un nombre aléatoire
let b1 = document.getElementById('b1'); // bouton Tester
let b2 = document.getElementById('b2'); // bouton Rejouer
let messageElement = document.getElementById("message");
let dichotomieElement = document.getElementById("dichotomie");

b1.addEventListener('click', comparaison);
b2.addEventListener('click', rejouer);
document.addEventListener('DOMContentLoaded', rejouer);

function comparaison() { // Compare la proposition de l'utilisateur au nombre aléatoire et modifie l'affichage
    let proposition = parseInt(document.getElementById("entree").value);

    if (proposition === nb_aleatoire) {
        messageElement.textContent = "Trouvé !";
		messageElement.style.color ="green";

    } else if (proposition < nb_aleatoire) {
        messageElement.textContent = "Trop petit !";
		messageElement.style.color = "red"; 

    } else {
        messageElement.textContent = "Trop grand !";
		messageElement.style.color = "red";
    }

	essais--; // Gestion du nombre d'essais restants
	if (essais > 0){
		dichotomieElement.textContent = "Nombre d'essais restants : " + essais;

	} 
	else if (essais <= 0){
		dichotomieElement.textContent = "Nombre d'essais restants : " + essais;
		dichotomieElement.style.color = "red";
	}
}

function rejouer() { // Réinitialise les variables et l'affichage à chaque nouvelle partie
    document.getElementById("entree").value = "";
    messageElement.textContent = "";
    nb_aleatoire = Math.floor(Math.random() * 1001);
	dichotomie();
	dichotomieElement.style.color = "purple";
}

let essais;

function dichotomie() { // Calcul du nombre de coup nécessaire en utilisant la recherche dichotomique
	let min = 0;
	let max = 1000;
	let mil = Math.floor((min + max) / 2);
	essais = 0; // Réinitialiser le nombre d'essais
	
	while (min <= max) {
		essais ++; 
		mil = Math.floor((min + max) / 2); 

		if (mil === nb_aleatoire) {
			dichotomieElement.textContent = "Nombre d'essais par recherche dichotomique : " + essais;
			return;
		} else if (mil < nb_aleatoire) {
			min = mil + 1;
		} else {
			max = mil - 1;
		}
	}
}