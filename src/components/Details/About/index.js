import React, {useState, useEffect, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {pokemonsStats} from './../cors/pokeApi';
import { PokemonsInfo } from '../../types/pokemonInfo';

import {
  ImageBackground,
  FlatList,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';

const About = ({hp,height, description, weight}) =>{
  // console.log('TEST STATS dans about', item.height, 'weight', item.weight,'HP -----' ,item.hp)



  return (
    <TouchableOpacity>

      <View>
  

        {/* <Text>{item.name}</Text> */}
      </View>
    </TouchableOpacity>
  );
};
export default About;
const styles = StyleSheet.create({

 

});
