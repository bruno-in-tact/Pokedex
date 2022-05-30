import React, {Component} from 'react';
import Axios from 'axios';
import request from '../utils/request';

export default class PokemonAllInformations extends Component {
  state = {
    name: '',
    pokemonIndex: '',
    imageUrl: '',
    types: [],
    description: '',
    stats: {
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      specialAttack: '',
      specialDefense: '',
    },
    height: '',
    weight: '',
    eggGroups: '',
    catchRate: '',
    abilities: '',
    genderRatioMale: '',
    genderRatioFemale: '',
    evs: '',
    hatchSteps: '',
  };
}

export async function fetchAllFromPokemons() {
  const {pokemonIndex} = this.props.match.params;

  // Urls for pokemon information
  const pokemonUrl = await request(`/pokemon/${pokemonIndex}/`);
  const pokemonSpeciesUrl = await request(`/pokemon-species/${pokemonIndex}/`);

  // Get Pokemon Information
  const pokemonRes = await Axios.get(pokemonUrl);
  const name = pokemonRes.data.name;
  const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png?raw=true`;

  let {hp, attack, defense, speed, specialAttack, specialDefense} = '';

  pokemonRes.data.stats.map(stat => {
    switch (stat.stat.name) {
      case 'hp':
        hp = stat['base_stat'];
        break;
      case 'attack':
        attack = stat['base_stat'];
        break;
      case 'defense':
        defense = stat['base_stat'];
        break;
      case 'speed':
        speed = stat['base_stat'];
        break;
      case 'special-attack':
        specialAttack = stat['base_stat'];
        break;
      case 'special-defense':
        specialDefense = stat['base_stat'];
        break;
      default:
        break;
    }
  });

  const decimeterToMeter = (value: number) =>
    parseFloat(String(value / 10)).toFixed(2);

  const decimeterToFeet = (value: number) =>
    parseFloat(String(value * 0.32808)).toFixed(2);

  const hectogramsToKilograms = (value: number) =>
    parseFloat(String(value / 10)).toFixed(2);

  const hectogramsToPounds = (value: number) =>
    parseFloat(String(value * 0.22046)).toFixed(2);

  // Convert Decimeters to Feet... The + 0.0001 * 100 ) / 100 is for rounding to two decimal places :)
  const height = decimeterToMeter(pokemonRes.data.heght);

    // Math.round((pokemonRes.data.height * 0.328084 + 0.00001) * 100) / 100;

  const weight =
    Math.round((pokemonRes.data.weight * 0.220462 + 0.00001) * 100) / 100;

  const types = pokemonRes.data.types.map(type => type.type.name);

  const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;

  const abilities = pokemonRes.data.abilities
    .map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ');
    })
    .join(', ');

  const evs = pokemonRes.data.stats
    .filter(stat => {
      if (stat.effort > 0) {
        return true;
      }
      return false;
    })
    .map(stat => {
      return `${stat.effort} ${stat.stat.name
        .toLowerCase()
        .split('-')
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')}`;
    })
    .join(', ');

  // Get Pokemon Description .....
  await Axios.get(pokemonSpeciesUrl).then(res => {
    let description = '';
    res.data.flavor_text_entries.some(flavor => {
      if (flavor.language.name === 'en') {
        description = flavor.flavor_text;
        return;
      }
    });
    const femaleRate = res.data['gender_rate'];
    const genderRatioFemale = 12.5 * femaleRate;
    const genderRatioMale = 12.5 * (8 - femaleRate);

    const catchRate = Math.round((100 / 255) * res.data['capture_rate']);

    const eggGroups = res.data['egg_groups']
      .map(group => {
        return group.name
          .toLowerCase()
          .split(' ')
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(' ');
      })
      .join(', ');

    const hatchSteps = 255 * (res.data['hatch_counter'] + 1);

    this.setState({
      description,
      genderRatioFemale,
      genderRatioMale,
      catchRate,
      eggGroups,
      hatchSteps,
    });
  });

  this.setState({
    imageUrl,
    pokemonIndex,
    name,
    types,
    stats: {
      hp,
      attack,
      defense,
      speed,
      specialAttack,
      specialDefense,
    },
    themeColor,
    height,
    weight,
    abilities,
    evs,
  });
}
