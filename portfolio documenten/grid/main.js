const labels = [
    "Mercedes",
    "Audi",
    "Aston Martin",
    "Volkswagen",
    "BMW"
];

const data = {
    labels: labels,
    datasets: [{
        label: "Meest verkochte Auto in afgelopen kwartaal",
        data: [15, 22, 42, 12, 22],
        backgroundColors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#F473B9'],
    }]
}

const config = {
    type: 'doughnut',
    data: data,
}


new Chart(document.getElementById("js--chart-1"), config); 



function getPokemon() {
    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0, ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0, ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

    for (i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * 151 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
            return response.json();
        })
        .then(function (pokemon) {
            switch (pokemon.types[0].type.name) {
                case 'normal':
                    normal++;
                    break;
                case 'fighting':
                    fighting++;
                    break;
                case 'flying':
                    flying++;
                    break;
                case 'poison':
                    poison++;
                    break;
                case 'ground':
                    ground++;
                    break;
                case 'rock':
                    rock++;
                    break;
                case 'bug':
                    bug++;
                    break;
                case 'ghost':
                    ghost++;
                    break;
                case 'steel':
                    steel++;
                    break;
                case 'fire':
                    fire++;
                    break;
                case 'water':
                    water++;
                    break;
                case 'electric':
                    electric++;
                    break;
                case 'psychic':
                    psychic++;
                    break;
                case 'ice':
                    ice++;
                    break;
                case 'dragon':
                    dragon++;
                    break;
                case 'dark':
                    dark++;
                    break;
                case 'fairy':
                    fairy++;
                    break;
                case 'unknown':
                    unknown++;
                    break;
                case 'shadow':
                    normal++;
                    break;
                case 'grass':
                    grass++;
                    break;
            }
    
        }).then(function () {
            dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow];
            graph.update();
        })
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon types",
                data: [normal, fighting, flying, poison, ground, rock, bug, ghost, steel, fire, water, grass, electric, psychic, ice, dragon, dark, fairy, unknown, shadow],
            }
        ]
    }

    const configPokemon = {
        type: 'line',
        data: dataPokemon,
    }
    
    const graph = new Chart(document.getElementById("js--chart-2"), configPokemon);
}

getPokemon();
