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

const Moves = ({moves, ...otherprops}) => {
  console.log('TEST MOVESSS dans MOVES', moves);

  return (
    <View >
      <Text style={styles.title}>Moves</Text>


      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
          <ScrollView>
            {moves.map(move => (
              <Text style={styles.moves}>{move}</Text>
            ))}

          </ScrollView>
      </View>
    </View>
  );
};
export default Moves;
const styles = StyleSheet.create({

  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  moves :{
    padding:2,
  }
});
