/**
 * Fonction random
 * 
 * Utile pour générer un nombre aléatoire facilement pour le reste des fonctions
 * 
 * @param num 
 *      Représente le plus grand nombre pouvant être généré
 * @returns int
 *      Retourne le nombre aléatoire généré
 */
const rand = (num) => { return Math.floor(Math.random() * Math.floor(num)) };

/**
 * Fonction de génération de phrase
 * 
 * D'abord la fonction récupère avec fetch le json avec le jeu de phrases, 
 * ensuite, transforme le JSON en tableau, puis choisi aléatoirement chaque morceau de phrase
 * et l'ajoute à la phrase, puis enfin, il l'affiche au sein de la div #result
 * 
 */
const generate = () => {

    fetch('assets/json/1.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let phrase = ""
            data.forEach(el => {
                let num = rand(el.length)
                phrase += el[num]
            })
            document.querySelector("#result").innerHTML = phrase;
        });
}