function listPokemonDetail(domElementId, pokemonData) {
    const params = new URLSearchParams(document.location.search);
    const pokName = params.get("pokemonName");
    const pokId = getPokemonIdByName(pokName, pokemonData);
    const pokemon = pokemonData[pokId];
    const domElement = document.getElementById(domElementId);
    domElement.innerHTML = `
        <a href="catalogue.html">
        <box class="retour">Retour</box>
      </a>
      <div class="bigcard" id="carte">
        <h2>${pokemon.name.fr} </h2>
        <div class="photo">
            <img src="img/full/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" class="pokepoke"/>
            <img src="img/sta.jpg" class="fond">
        </div>
        <h5>Type</h5>
        <div class="type" style="background-color: ${pokemon.type_color[0]};"><h4>${pokemon.type_fr[0]}</h4></div>
        <div class="type2" style="background-color: ${pokemon.type_color[1]};"><h4>${pokemon.type_fr[1]}</h4></div>
        <h5 class="stat">Statistique</h5>
        <div class="sat">
            <div class="écriture">
            PV : ${pokemon.stats.hp}</p>
            Attaque : ${pokemon.stats.attack}</p>
            Défense : ${pokemon.stats.defense}</p>
            Attaque Spéciale : ${pokemon.stats.special_attack}</p>
            Défense Spéciale : ${pokemon.stats.special_defense}</p>
            Vitesse : ${pokemon.stats.speed}</p>
        </div>
        </div>
    </div>
    `;
}


function getPokemonIdByName(name, pokemonData) {
    for (let key in pokemonData){
        if (pokemonData[key].identifier == name){
            return key ;
        }
    }
}


function listAllPokemon(domElementId, pokemonData, pokemonsParType) {
    const domElement = document.getElementById(domElementId);
    domElement.innerHTML = Object.values(pokemonData).map(pokemon => `
        <div class="cards-container">
            <div class="card">
            <a href="card.html?pokemonName=${pokemon.identifier}">
                <img src="img/full/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" class="pokemons"/>
            </a>
            <p>${pokemon.name.fr}</p>
            <button class="ajout" onclick="addPokemonToCollection('collect',${getPokemonIdByName(pokemon.identifier,pokemonData)}, pokemonData)">Ajouter</button>
            <p>Type : ${pokemon.type_fr}</p>
            </div>
        </div>
    `).join('');
}


function listAllPokemonFromCollection(domElementId, collectionData, pokemonData) {
    const domElement = document.getElementById(domElementId);
    const pokemons = collectionData.map(assoc => {
        const pokemon = pokemonData[assoc.pokemon_id];
        return {
            ...pokemon,
            pokemon_nickname: assoc.pokemon_nickname
        };
    });
    domElement.innerHTML = pokemons.map(pokemon => `
        <div class="cards-container">
            <div class="card2">
            <a href="card.html?pokemonName=${pokemon.identifier}">
                <img src="img/full/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" class="pokemons"/>
            </a>
            <button class="name" onclick="changePokemonNickname('nickname-${pokemon.identifier}', prompt('Donnez un nouveau surnom pour votre Pokemon !! :'))">Nom</button>
            <p id="nickname-${pokemon.identifier}">${pokemon.pokemon_nickname}</p>
            <button class="remove" onclick="addPokemonToCollection('test',99,pokemonData)">Enlever</button>
            <p>Exp : ${pokemon.base_experience}</p>
            </div>
        </div>
    `).join('');
}

function addPokemonToCollection(domElementId, pokemonId, pokemonData) {
    const domElement = document.getElementById(domElementId);

    const pokemon = pokemonData[pokemonId];

    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');
    let idTempo = `pokemon-${new Date().getTime()}`;
    pokemonElement.id = idTempo;
    pokemonElement.innerHTML = `
        <div class="cards-container">
            <div class="card2">
            <a href="card.html?pokemonName=${pokemon.identifier}">
                <img src="img/full/${getPokemonIdByName(pokemon.identifier, pokemonData)}.png" class="pokemons"/>
            </a>
            <button class="name" onclick="changePokemonNickname('nickname-${pokemon.identifier}', prompt('Donnez un nouveau surnom pour votre Pokemon !! :'))">Nom</button>
            <p id="nickname-${pokemon.identifier}">${pokemon.pokemon_nickname}</p>
            <button class="remove" onclick="deletePokemonFromCollection('${idTempo}')">Enlever</button>
            <p>Exp: ${pokemon.base_experience}</p>
            </div>
        </div>
    `;

    domElement.appendChild(pokemonElement);
}

function deletePokemonFromCollection(domElementId) {
    const pokemonElement = document.getElementById(domElementId);
    
    if (pokemonElement) {
        pokemonElement.remove();
    }
}

function changePokemonNickname(domElementId, newNickname) { 
    const domElement = document.getElementById(domElementId);
    domElement.innerHTML = `<p>${newNickname}</p>`;
}
