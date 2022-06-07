import React, {useState, useEffect, useCallback} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import getColorByPokemonType from './../../utils/pokemonTypeColor';
import {fetchPokemons} from './../../cors/pokeApi';
import {pokeSpecies} from './../../cors/pokeApi';

import ButtonsNav from './../../components/ButtonsNav';
import Pokemons from './../../components/Pokemons';
import About from './../../components/Details/About/index';
import BaseStats from './../../components/Details/BaseStats/index';
import Evolution from './../../components/Details/Evolution/index';
import Moves from './../../components/Details/Moves/index';

import Animated from 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './../../components/BottomSheet';

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
  Button,
  SafeAreaView,
  Alert,
  Dimensions,
} from 'react-native';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const { currentPokemon} = route.params;
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const [pokemonData, setPokemonData] = useState(undefined);
  const [pokemonInfoDescritpion, setPokemonInfoDescritpion] =
    useState(undefined);

 

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.imgBackground,
            backgroundColor: getColorByPokemonType(currentPokemon.types[0]),
          }}>
          <ImageBackground
            style={styles.heart}
            source={require('./../../assets/Images/heart.png')}
          />

          <TouchableOpacity onPress={handleGoBack}>
            <ImageBackground
              style={styles.imgArrowBack}
              source={require('./../../assets/Images/white.png')}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.pokemonName}>{currentPokemon.name}</Text>
          <Text style={styles.id}>
            #{String(currentPokemon.number).padStart(3, '0')}
          </Text>
          <View style={styles.itemContainer}>
            {currentPokemon.types.map(type => (
              <Text style={styles.typesPokemon}>{type}</Text>
            ))}
          </View>
          <ImageBackground
            style={styles.imgPokeStyle}
            source={require('./../../assets/Images/Element.png')}
          />
          <ImageBackground
            style={styles.imgPokemon}
            source={{uri: currentPokemon.img}}></ImageBackground>
        </View>
      </View>
      <BottomSheet />
      <View></View>
      <ImageBackground
        style={styles.imgEasterEggs}
        source={require('./../../assets/Images/pika.jpeg')}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imgPokeStyle: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    flex: 1,
    opacity: 0.5,
    marginHorizontal: -80,
  },
  imgEasterEggs: {
    height: '70%',
    zIndex: -100,
  },
  

  parent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
 

  typesPokemon: {
    color: 'white',
    margin:2,
    fontWeight: 'bold',
    fontSize: 17,
    position: 'relative',
    textAlign: 'center',
    zIndex:10,
  },
  itemContainer: {
    marginLeft: 30,
    top: 60,
    margin: 10,
    zIndex: 2,
    textAlign: 'center', // <-- the magic
    width: 70,
    height: 30,
    opacity: 0.9,
    backgroundColor: '#fff6',
    borderRadius: 38,
    padding: 4,
    color: 'white',
    fontWeight: 400,
  },

  id: {
    right: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    top: 35,
    position: 'relative',
    marginLeft: 'auto',
  },

  pokemonName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 42,
    top: 65,
    marginHorizontal: 25,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 1},
    textShadowRadius: 5,
  },

  imgBackground: {
    width: '100%',
    top: 0,
  },
  imgPokemon: {
    width: 200,
    height: 224,
    marginHorizontal: 100,
    zIndex: 1,
  },
  imgArrowBack: {
    left: 20,
    top: 30,
    width: 22,
    height: 13,
    zIndex: 10,
  },
  heart: {
    // pourquoi absolute obligatoire? à voir:
    position: 'absolute',
    right: 28,
    width: 16,
    height: 18,
    top: 30,
    zIndex: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    width: 316,
  },
  
});
