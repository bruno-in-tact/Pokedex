import React, {useEffect, useState} from 'react';
import request from '../utils/request';

export async function fetchPokemons() {
  const pokemonsList = await request('/pokemon?limit=30');
  const {results: pokemons} = pokemonsList;

  //destructuring : result = ce quon cherche dans l'objet// name of variable
  console.log('Avant transformation de lobjet : ', pokemons);
  const pokemonName = pokemons.map(p => request(`/pokemon/${p.name}`));
  const pokemonsDetails = await Promise.all(pokemonName);

  let [hp, attack, defense, specialAttack, specialDefence] ='';

  console.log('pokemonsDetails----->', pokemonsDetails);
  const finalArray = pokemonsDetails.map(({ sprites, id, types, height, weight}, i) => ({
    name: pokemons[i].name,
    img:
    //  `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons[i].name}.png`,
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`,
    number: id,
    types: types.map(t => t.type.name), 
    height: height,
    weight: weight, 
    description: description,
  }));
  return finalArray;
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















 //---------------------------------------------------------------------------------------------

export async function pokemonsDetails(id) {
  console.log('ENTREES  : ', id);

  const pokemonSpeciesURL = await request(`/pokemon-species/${id}/`);
  const {flavor_text_entries: pokemonsDescritpion,  } = pokemonSpeciesURL;
  console.log('TRANSFORMATION  SPECIES  : ', pokemonsDescritpion[0]);
  console.log('POKEMON SPECIESSSS----->', pokemonsSpecies);
  const resultDescription = pokemonsDescritpion[0];
  return resultDescription;
}




