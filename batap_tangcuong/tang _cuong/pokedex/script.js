const poke_container = document.getElementById("poke_container");
const getInTouch = document.querySelector(".floating-btn");
const panel = document.querySelector(".social-panel-container");


const pokemons_number = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};
const main_types = Object.keys(colors);

(async function () {
  const getCardPoke = (data) => {
    pokemon = data;
    const name = pokemon.name;
    const type = pokemon.types[0].type.name;
    id = pokemon.id;
    let color = colors[type];

    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    pokemonEl.style.backgroundColor = color;
    pokemonEl.innerHTML = `<div class="img-container">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${name}" />
      </div><div class="info">
      <span class="number">#${pokemon.id.toString().padStart(3, "0")}</span>
      <h3 class="name">${name}</h3>
      <small class="type">Type: <span>${type}</span></small>
  </div>`;
    poke_container.appendChild(pokemonEl);
  };

  const getpoke = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    getCardPoke(data);
  };
  for (let i = 1; i <= pokemons_number; i++) {
    await getpoke(i);
  }

  let flagClose = false;

  poke_container.addEventListener("click", (e) => {
    if (flagClose == true) {
      panel.style.transform = "translateX(" + 100 + "%)";
      flagClose = false;
    }
  });
  getInTouch.addEventListener("click", (e) => {
    if (flagClose == false) {
      panel.style.transform = "translateX(" + 0 + ")";
      flagClose = true;
    } else {
      panel.style.transform = "translateX(" + 100 + "%)";
      flagClose = false;
    }
  });
})();