const pokemonImage = document.getElementById("js--pokemon-image");
const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let hasThrown = false;
let i = 0;
let fire = 0;



const getPokemon = function() {
    let randomNumber = Math.floor(Math.random() * 151 + 1);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function (response) {
        return response.json();
    })
    .then(function (pokemon) {
        pokemon[i] = pokemon.types.name;
        kaas = pokemon.types[0].type.name;
        console.log(kaas);

        if (pokemon.types[0].type.name === "fire") {
            fire++;
        }

        console.log(fire);


        const labels = [
            "answer.types",
            "",
            "Nintendo 2DS",
            "Nintendo 3DS",
            "Nintendo Switch"
        ];

        const data = {
            labels: labels,
            datasets: [{
                label: "Meest verkochte autos",
                data: labels,
            }]
        }

        const config = {
            type: 'bar',
            data: data,
        }

        new Chart(document.getElementById("js--chart-2"), config);

    });
}

for (let i = 0; i < 10; i++) {
    getPokemon();
}
