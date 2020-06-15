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
 * Classe phrase, construit une phrase a partir du jeu de phrases passé
 */
class Phrase {
    constructor(list){
        this.start = list[0][rand(list[0].length)]
        this.mid = list[1][rand(list[1].length)]
        this.end = list[2][rand(list[2].length)]
        this.phrase = this.start + this.mid + this.end
    }
}

/**
 * Permet de faire correspondre le slider et le champs 
 * et de vérifier sa valeur pour qu'elle reste comprise entre 0 et 5
 * 
 * @param int value 
 *      Valeur de l'entrée qui vient d'être modifiée
 */
const updateValue = (value) => {
    if(value<0) {
        value = 0
    } else if(value>5) {
        value = 5
    }
    document.querySelector("#valueInput").value = value
    document.querySelector("#valueSlider").value = value
}

/**
 * Permet d'effectuer plusieurs itérations à partir du jeu de données passé
 * et de les ajouter à la page
 * 
 * @param int req
 *      nombre de phrases à générer 
 * @param array data 
 *      jeu de mots pour constituer la phrase
 */
const iterate = (req, data) => {
    for (let i = 0; i < req; i++) {
        let phrase = new Phrase(data)
        document.querySelector("#result").innerHTML += (phrase.phrase + "<br><br>");
    }
}

/**
 * Permet de récupérer les données entrées par l'utilisateur: 
 * Le nombre de phrases à générer et la liste a utiliser
 * 
 * @param int list 
 *      Numéro du jeu de données a utiliser
 */
const generate = (list) => {
    let request = document.querySelector('#valueSlider').value
    generate(request, list)
    document.querySelector("#result").innerHTML = "<br>"
    fetch(list + '.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            iterate(iterations, data)
        });
}
  