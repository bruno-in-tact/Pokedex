import {POKEMON_TYPE_COLORS} from '../constants';

// const getColorByPokemonType = currentPokemon => {
//   console.log('my current pokemon dans pokemonType', currentPokemon)
//   if (currentPokemon && currentPokemon.type) {
//     POKEMON_TYPE_COLORS[type];
//   }
// };
// export default getColorByPokemonType;
const getColorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type];

export default getColorByPokemonType;