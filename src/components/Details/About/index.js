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

const About = ({hp, height, description, weight, ...otherprops}) => {
  console.log('TEST STATS dans about', height);

  return (
    <View style={styles.about}>
      <View style={styles.component}>
        <Text style={styles.text}>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </Text>
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>Height </Text>
          <Text>Weight</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.data}>({height / 10} cm)</Text>
            <Text style={styles.data}>({weight / 10} kg)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.text}>Breeding</Text>
    </View>
  );
};
export default About;
const styles = StyleSheet.create({
  component: {
    width: '100%',
    marginTop: 60,
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
