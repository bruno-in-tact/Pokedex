
import request from '../utils/request';
import Axios from 'axios';


export async function fetchPokemons() {
  const pokemonsList = await request('/pokemon?limit=20');
  const {results: pokemons} = pokemonsList;

  //destructuring : result = ce quon cherche dans l'objet// name of variable
  console.log('Avant transformation de lobjet : ', pokemons);
  const getDetailsByPokemonsName= pokemons.map(p => request(`/pokemon/${p.name}`));
  const pokemonsDetails = await Promise.all(getDetailsByPokemonsName);


  console.log('pokemonsDetails----->', pokemonsDetails);
  const ArrayPokemonsDetails = pokemonsDetails.map(({ sprites, id, types, height, weight, hp,abilities, ...item}, i) => ({
    name: pokemons[i].name,
    img:
    //  `https://img.pokemondb.net/sprites/omega-ruby-alpha-sapphire/dex/normal/${pokemons[i].name}.png`,
      `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${id}.png?raw=true`,
    number: id,
    types: types.map(t => t.type.name), 
    height: height,
    abilities:  abilities.map(a=> a.ability.name),
    weight: weight,
    stats : 
    item.stats.reduce((acc,cur)=>{
      acc[cur.stat.name ] = cur.base_stat;
      return acc;
  }, {})
    

  }));
  // console.log("CECI EST UN ARRAY", ArrayPokemonsDetails)
  return ArrayPokemonsDetails;

}
//---------------------------------------------------------------------------------------------




export async function pokemonInfos() {
  console.log('ENTREES  : ', );
  const getPokemonSpeciesById = await request(`/pokemon-species/${id}/`);

  const {flavor_text_entries: pokemonsDescritpion } = getPokemonSpeciesById;
  const {egg_groups: pokemonsEgssGroup } = getPokemonSpeciesById;
  const {evolution_chain: pokemonEvolution } =getPokemonSpeciesById;
  const {base_happiness: pokemonHapiness } =getPokemonSpeciesById;
  const {capture_rate: pokemonCapture } =getPokemonSpeciesById;
  // const getPokemonSpeciesById = await request(`/pokemon-species/${pokemonIndex}/`);
const speciesInformation = (pokemonsDescritpion[0], pokemonsEgssGroup[0], pokemonHapiness, pokemonCapture);
  console.log('TRANSFORMATION  SPECIES  : ', pokemonsDescritpion[0], pokemonsEgssGroup[0], pokemonHapiness, pokemonCapture);
  const resultDescription = pokemonsDescritpion[0];
  const pokemonSpeciesData = await Promise.all(resultDescription);
  return speciesInformation;

}





export async function pokeSpecies(id= 1) {
  console.log('ENTREES  : ', );
  const getPokemonSpeciesById = await request(`/pokemon-species/${id}/`);
  console.log('getPokemonSpeciesById  : ',getPokemonSpeciesById );
//   const pokemonUrl = await request(`/pokemon/${id}/`);
//   const getPokemonSpeciesById = await request(`/pokemon-species/${id}/`);
//   // Get Pokemon Description .....
//  getPokemonSpeciesById.then(res => {
//     let description = '';
//     res.data.flavor_text_entries.some(flavor => {
//       if (flavor.language.name === 'en') {
//         description = flavor.flavor_text;
//         return;
//       }
//     });
//     const femaleRate = res.data['gender_rate'];
//     const genderRatioFemale = 12.5 * femaleRate;
//     const genderRatioMale = 12.5 * (8 - femaleRate);

//     const catchRate = Math.round((100 / 255) * res.data['capture_rate']);

//     const eggGroups = res.data['egg_groups']
//       .map(group => {
//         return group.name
//           .toLowerCase()
//           .split(' ')
//           .map(s => s.charAt(0).toUpperCase() + s.substring(1))
//           .join(' ');
//       })
//       .join(', ');

//     const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

    
//     this.setState({
//       description,
//       genderRatioFemale,
//       genderRatioMale,
//       catchRate,
//       eggGroups,
//       hatchSteps,
//     });
//     console.log('JE SUIS ICI',description, genderRatioFemale,genderRatioMale,catchRate,eggGroups,hatchSteps);
//   });


}
