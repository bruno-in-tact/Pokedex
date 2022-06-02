import React, {useState, useEffect, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {pokemonsStats} from './../cors/pokeApi';
import {PokemonsInfo} from '../../types/pokemonInfo';

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

const Evolution = ({hp, height, description, weight, ...otherprops}) => {
  console.log('TEST STATS dans about', height);

  return (
    <View style={styles.about}>
     <Text>Components EVOLUTION</Text>
    </View>
  );
};
export default Evolution;
const styles = StyleSheet.create({
  component: {
    width: '100%',
  },
  about: {
    height: '100%',
    width: '100%',
  },
  text: {
    marginHorizontal: '10%',
  },

  container: {
    flex: 1,
    flexWrap: 'wrap',
    marginVertical: 30,
    width: '80%',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: '10%',
    padding: 15,
    opacity: 0.5,
    fontSize: 15,
    fontWeight: 'bold',
  },

  data: {
    color: 'black',
    fontSize: 15,
    padding: 7,
    fontWeight: 'bold',
  },
});
