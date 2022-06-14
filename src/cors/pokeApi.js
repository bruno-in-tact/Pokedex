import request from '../utils/request';
import Axios from 'axios';

export async function fetchPokemons(offset) {
  const pokemonsList = await request(`/pokemon?limit=41&offset=${offset}`);
  const {results: pokemons} = pokemonsList;
  //destructuring : result = ce quon cherche dans l'objet// name of variable
  console.log('Avant transformation de lobjet : ', pokemons);
  const getDetailsByPokemonsName = pokemons.map(p =>
    request(`/pokemon/${p.name}`),
  );
  const pokemonsDetails = await Promise.all(getDetailsByPokemonsName);

  console.log('pokemonsDetails----->', pokemonsDetails);
  const ArrayPokemonsDetails = pokemonsDetails.map(
    (
      {
        sprites,
        id,
        types,
        height,
        weight,
        hp,
        abilities,
        base_experience,
        imgNext,
        imgPrevious,
        moves,
        ...item
      },
      i,
    ) => ({
      name: pokemons[i].name,
      img:
        //  `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons[i].name}.png`,
        `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`,
      imgNext: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${
        id + 1
      }.png?raw=true`,
      imgPrevious: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${
        id - 1
      }.png?raw=true`,
      number: id,
      types: types.map(t => t.type.name),
      height: height,
      abilities: abilities.map(a => a.ability.name),
      moves: moves.map(m => m.move.name),
      base_experience: base_experience,
      weight: weight,
      stats: item.stats.reduce((acc, cur) => {
        acc[cur.stat.name] = cur.base_stat;
        return acc;
      }, {}),
    }),
  );
  // console.log("CECI EST UN ARRAY", ArrayPokemonsDetails)
  return ArrayPokemonsDetails;
}
//---------------------------------------------------------------------------------------------

export async function fecthPokemon(id) {
  const myPokemon = await request(`/pokemon/${id}`);
  console.log('Hello its mee maario ', myPokemon);

  const arrayMyPokemon = 
    {
      name: myPokemon.name,
      number: myPokemon.id,
      img: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${myPokemon.id}.png?raw=true`,
      imgNext: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${
        myPokemon.id + 1
      }.png?raw=true`,
      imgPrevious: `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${
        myPokemon.id - 1
      }.png?raw=true`,
      types: myPokemon.types.map(t => t.type.name),
      abilities: myPokemon.abilities.map(a => a.ability.name),
      moves: myPokemon.moves.map(m => m.move.name),
      base_experience: myPokemon.base_experience,
      weight: myPokemon.weight,
      stats: myPokemon.stats.reduce((acc, cur) => {
        acc[cur.stat.name] = cur.base_stat;
        return acc;
      }, {}),
    }
  
  console.log('Here is my pokemon', arrayMyPokemon);
  return arrayMyPokemon;
  //  return myPokemon;
}

// POKEMONS SPECIES
export async function pokeSpecies(id) {
  console.log('ENTREES  : ');
  const getPokemonSpeciesById = await request(`/pokemon-species/${id}/`);
  console.log('getPokemonSpeciesById  : ', getPokemonSpeciesById);
  return getPokemonSpeciesById;
}

export async function pokeGender(gender_rate) {
  console.log('ENTRE POKE GENDER : ');
  const getPokemonGenderById = await request(`/gender/${gender_rate}/`);
  console.log('getPokemonGenderById', getPokemonGenderById);
  return getPokemonGenderById;
}

export async function pokeEvolution(id) {
  console.log('ENTRE POKE EVOLUTION : ');
  const getPokemonEvolutionById = await request(`/evolution-chain/${id}/`);
  console.log('getPokemonEvolutionById', getPokemonEvolutionById);
  let evoChain = [];
  let evoData = chain.chain;

  do {
    let numberOfEvolutions = evoData['evolves_to'].length;

    evoChain.push({
      species_name: evoData.species.name,
      min_level: !evoData ? 1 : evoData.min_level,
      trigger_name: !evoData ? null : evoData.trigger.name,
      item: !evoData ? null : evoData.item,
    });

    if (numberOfEvolutions > 1) {
      for (let i = 1; i < numberOfEvolutions; i++) {
        evoChain.push({
          species_name: evoData.evolves_to[i].species.name,
          min_level: !evoData.evolves_to[i]
            ? 1
            : evoData.evolves_to[i].min_level,
          trigger_name: !evoData.evolves_to[i]
            ? null
            : evoData.evolves_to[i].trigger.name,
          item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
        });
      }
    }

    evoData = evoData['evolves_to'][0];
  } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  console.log('evochainnnnnn', evoChain);
  return evoChain;
}
