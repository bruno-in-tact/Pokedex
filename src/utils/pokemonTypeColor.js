import { POKEMON_TYPE_COLORS } from '../constants';

const getColorByPokemonType = (type) =>
  POKEMON_TYPE_COLORS[type];

export default getColorByPokemonType;