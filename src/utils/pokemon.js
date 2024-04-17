import { reactive } from "vue";

export const pokemons = reactive([
  {
    id: "PKM00001",
    name: "Pikachuchu",
    specie: "Pikachu",
    age: 13,
  },
  {
    id: "PKM00002",
    name: "Pikaaa",
    specie: "Pikachu",
    age: 15,
  },
]);

const generateNewId = () => {
  const maxId = parseInt(
    pokemons[pokemons.length - 1].id.replace("PKM", ""),
    10
  );
  const newId = "PKM" + String(maxId + 1).padStart(5, "0");
  return newId;
};

export const addPokemon = (pokemonData) => {
  const pokemonId = generateNewId();
  pokemonData.id = pokemonId;
  pokemons.push(pokemonData);

  return pokemonId;
};
