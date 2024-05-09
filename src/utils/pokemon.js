import { reactive } from "vue";

export const pokemons = reactive([
  {
    id: "PKM00001",
    name: "Shy Pikachu",
    specie: "Pikachu",
    age: 13,
  },
  {
    id: "PKM00002",
    name: "Pikaaa",
    specie: "Pikachu",
    age: 15,
  },
  {
    id: "PKM00003",
    name: "Snorlachuchu",
    specie: "Snorlax",
    age: 13,
  },
  {
    id: "PKM00004",
    name: "Muuuuck",
    specie: "Muk",
    age: 13,
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

export const pokeSpecies = [
  "Bulbasaur",
  "Charmander",
  "Squirtle",
  "Chikorita",
  "Cyndaquil",
  "Totodile",
  "Treecko",
  "Torchic",
  "Mudkip",
  "Snorlax",
];
