import React, {useState, useEffect, useMemo} from 'react';
import {BACKGROUNDCOLORS} from './../assets/colors';
import {pokemonTypeColor} from './../utils/pokemonTypeColor';
import {useNavigation} from '@react-navigation/native';
import getColorByPokemonType from './../utils/pokemonTypeColor';
import {COLOR} from './../constants/index';

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
//rnefcs

const Pokemons = ({key, item}) => {
  const navigation = useNavigation();
 console.log('JE TEEEEEEEEEEESTTTTTTT',Pokemons);

  return (
    <TouchableOpacity
      key={key}
      style={{
        ...styles.card,
        backgroundColor: getColorByPokemonType(item.types[0]),
      }}
      onPress={() =>
        navigation.navigate('Details', {
          // name: item.name,
          // id: item.number,
          // type: item.types[0],
          // color: item.types[0],
          // img: item.img,
          currentPokemon:item,

        })
      }>
      <Image style={styles.imgPokemon} source={{uri: item.img}} />

      <View>
        <View style={styles.id}>
          <Text style={styles.name}>
            #{String(item.number).padStart(3, '0')}
          </Text>
        </View>
        <Text style={styles.pokemonName}>{item.name}</Text>
        <View style={styles.itemContainer}>
          {item.types.map(t => (
            <Text style={styles.typesPokemon}>{t}</Text>
          ))}
        </View>
        <ImageBackground
          style={styles.imgPokeStyle}
          source={require('./../assets/Images/Pokeball_card.png')}
          resizeMode="cover"></ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Pokemons;
const styles = StyleSheet.create({
  imgPokeStyle: {
    width: 83,
    height: 83,
    right: 10,
    position: 'absolute',
    bottom: -50,
  },
  id: {
    width: 56,
    zIndex: 1,
    right: -5,
    color: 'grey',
    fontSize: 9,
    top: -10,
    opacity: 0.5,
    position: 'absolute',
  },
  pokemonName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  typesPokemon: {
    color: 'white',
    height: 16,
    width: 60,
    position: 'relative',
    textAlign: 'center',
    top: -5,
  },

  itemContainer: {
    height: 16,
    width: 50,
    backgroundColor: '#fff6',
    borderRadius: 38,
    padding: 4,
    color: 'white',
    fontWeight: 400,
    position: 'absolute',
    top: 20,
    textAlign: 'center', // <-- the magic
    width: 70,
    opacity: 0.9,
    backgroundColor: '#fff6',
  },

  imgPokemon: {
    width: 90,
    height: 100,
    position: 'absolute',
    right: 0,
    top: 17,
    zIndex: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: 30,
  },
  containerWrap: {
    margin: 15,
  },
  card: {
    borderRadius: 8,
    width: '45%',
    height: 111,
    paddingLeft: 10,
    paddingTop: 15,
    marginVertical: 7,
    marginHorizontal: 7,
  },
});
