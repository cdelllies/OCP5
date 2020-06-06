const rand = (num) => { return Math.floor(Math.random() * Math.floor(num)) };

const iterate = (req, data) => {
    for (let i = 0; i < req; i++) {
        let phrase = ""
        data.forEach(el => {
            let num = rand(el.length);
            phrase += el[num]
        })
        document.body.innerHTML += (phrase + "</br>");
    }
}

const generate = (iterations, list) => {

    fetch(list + '.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            iterate(iterations, data)
        });
}

generate(2, 1);

