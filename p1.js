const rand = (num) => { return Math.floor(Math.random() * Math.floor(num)) };

const generate = () => {

    fetch('1.json')
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            let phrase = ""
            data.forEach(el => {
                let num = rand(el.length)
                phrase += el[num]
            })
            console.log(phrase)
        });
}