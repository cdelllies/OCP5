const rand = (num) => { return Math.floor(Math.random() * Math.floor(num)) };

const updateValue = (value) => {
    document.querySelector("#value").innerHTML = value
}

const iterate = (req, data) => {
    for (let i = 0; i < req; i++) {
        let phrase = ""
        data.forEach(el => {
            let num = rand(el.length);
            phrase += el[num]
        })
        document.querySelector("#result").innerHTML += (phrase + "<br><br>");
    }
}

const generate = (iterations, list) => {
    document.querySelector("#result").innerHTML = "<br>"
    fetch(list + '.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            iterate(iterations, data)
        });
}

const start = (list) => {
    let request = document.querySelector('#iterations').value
    generate(request, list)
}

