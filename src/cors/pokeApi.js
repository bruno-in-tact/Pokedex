import React, {useEffect, useState} from 'react';
import request from '../utils/request';

export async function fetchPokemons() {
  const pokemonsList = await request('/pokemon?limit=20');
  const {results: pokemons} = pokemonsList;

  //destructuring : result = ce quon cherche dans l'objet// name of variable
  console.log('Avant transformation de lobjet : ', pokemons);
  const pokemonName = pokemons.map(p => request(`/pokemon/${p.name}`));
  const pokemonsDetails = await Promise.all(pokemonName);

  let [hp, attack, defense, specialAttack, specialDefence] ='';

  console.log('pokemonsDetails----->', pokemonsDetails);
  const finalArray = pokemonsDetails.map(({ sprites, id, types, height, weight, hp, ...item}, i) => ({
    name: pokemons[i].name,
    img:
    //  `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons[i].name}.png`,
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`,
    number: id,
    types: types.map(t => t.type.name), 
    height: height,
    weight: weight,
    stats : 
    item.stats.reduce((acc,cur)=>{
      acc[cur.stat.name ] = cur.base_stat;
      return acc;
  }, {})
  }));
  // console.log("CECI EST UN ARRAY", finalArray)
  return finalArray;

}
//---------------------------------------------------------------------------------------------

export async function pokemonInfos() {
  console.log('ENTREES  : ', );
  const pokemonSpeciesURL = await request(`/pokemon-species/${id}/`);

  const {flavor_text_entries: pokemonsDescritpion } = pokemonSpeciesURL;
  const {egg_groups: pokemonsEgssGroup } = pokemonSpeciesURL;
  const {evolution_chain: pokemonEvolution } =pokemonSpeciesURL;
  const {base_happiness: pokemonHapiness } =pokemonSpeciesURL;
  const {capture_rate: pokemonCapture } =pokemonSpeciesURL;


  // const pokemonSpeciesUrl = await request(`/pokemon-species/${pokemonIndex}/`);

  console.log('TRANSFORMATION  SPECIES  : ', pokemonsDescritpion[0], pokemonsEgssGroup[0], pokemonHapiness, pokemonCapture);
  const resultDescription = pokemonsDescritpion[0];
  const pokemonSpeciesData = await Promise.all(resultDescription);
  return resultDescription;






  // Get Pokemon Description .....
  // await Axios.get(pokemonSpeciesUrl).then(res => {
  //   let description = '';
  //   res.data.flavor_text_entries.some(flavor => {
  //     if (flavor.language.name === 'en') {
  //       description = flavor.flavor_text;
  //       return;
  //     }
  //   });

}





export async function pokemonsStats() {
  const pokemonsList = await request('/pokemon?limit=30');
  const {results: pokemons} = pokemonsList;

  //destructuring : result = ce quon cherche dans l'objet// name of variable
  console.log('Avant transformation de lobjet : ', pokemons);
  const pokemonName = pokemons.map(p => request(`/pokemon/${p.name}`));
  const pokemonsStats = await Promise.all(pokemonName);

  let [hp, attack, defense, specialAttack, specialDefence] ='';

  console.log('pokemonsStats----->', pokemonsDetails);
  const ArrayStats = pokemonsDetails.map(({description, sprites, id,attack,defense, types, height, weight, eggGroup, abilities,genderRatioFemale,genderRatioMale}, i) => ({
    name: pokemons[i].name,
      // test ajout des autres data
      description: '',
      stats : [
        hp: hp,
        attack: attack,
        defense: defense,
        specialAttack: specialAttack,
        specialDefence: specialDefence,
      ],
        height: height,
        weight: weight,
        eggGroup: eggGroup,
        abilities: abilities,
        genderRatioMale: genderRatioMale,
        genderRatioFemale: genderRatioFemale,
        evs: evs,
        hatchSteps:hatchSteps,
  }));
  return ArrayStats;
}
