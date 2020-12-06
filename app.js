const pokeContainer = document.querySelector("#poke-container");
for (let i = 1; i <= 151; i++) {
  const pokeCard = document.createElement("div");
  const pokemon = document.createElement("img");
  const number = document.createElement("span");
  pokemon.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  number.innerText = `#${i}`;
  pokeCard.appendChild(pokemon);
  pokemon.style.display = "block";
  pokeCard.appendChild(number);
  pokeContainer.appendChild(pokeCard);
  pokeCard.style.display = "inline-block";
  pokeCard.style.textAlign = "center";
  pokeCard.style.border = "1px solid gray";
}
