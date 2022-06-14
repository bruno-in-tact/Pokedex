import React, {useState, useEffect, useCallback} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import getColorByPokemonType from './../../utils/pokemonTypeColor';
import {fecthPokemon} from './../../cors/pokeApi';
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

import {
  Grayscale,
  Sepia,
  Tint,
  ColorMatrix,
  concatColorMatrices,
  invert,
  contrast,
  saturate,
} from 'react-native-color-matrix-image-filters';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

export default function Details(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const {currentPokemon} = route.params;
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const [myCurrentPokemon, setMyCurrentPokemon] = useState(currentPokemon);
  // je crée une fonction async qui doit fetch monPokemon ID,
  // qui doit setState du nextPokemon, et renvoyer le newPokemonData
  async function goToNextPokemon() {
    const myPokemonData = await fecthPokemon(currentPokemon.number + 1);
    setMyCurrentPokemon(myPokemonData);
    console.log('NEXT POKEMON DATA ', myPokemonData);
  }
  async function goToPreviousPokemon() {
    const myPokemonData = await fecthPokemon(currentPokemon.number - 1);
    setMyCurrentPokemon(myPokemonData);
    console.log('PREVIOUS POKEMON DATA ', myPokemonData);
  }


  const myProps = (props) =>{
    return myCurrentPokemon
  }

  return (
    <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View
          style={{
            ...styles.imgBackground,
            backgroundColor: getColorByPokemonType(myCurrentPokemon.types[0]),

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
          <Text style={styles.pokemonName}>{myCurrentPokemon.name}</Text>
          <Text style={styles.id}>
            #{String(myCurrentPokemon.number).padStart(3, '0')}
          </Text>
          <View style={styles.itemContainer}>
            {myCurrentPokemon.types.map(type => (
              <Text style={styles.typesPokemon}>{type}</Text>
            ))}
          </View>
          <ImageBackground
            style={styles.imgPokeStyle}
            source={require('./../../assets/Images/poke.jpeg')}
          />
          <ImageBackground
            style={styles.imgPokemon}
            source={{uri: myCurrentPokemon.img}}></ImageBackground>

          {/* JE RE RENDER MON COMPONENTS AVEC LES NOUVELLES DATA */}

          <TouchableOpacity onPress={() => goToNextPokemon()}>
            <ImageBackground
              style={{...styles.imgNextPokemon}}
              source={{uri: currentPokemon.imgNext}}></ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => goToPreviousPokemon()}>
            <ImageBackground
              style={styles.imgPreviousPokemon}
              source={{uri: currentPokemon.imgPrevious}}></ImageBackground>
          </TouchableOpacity>
        </View>
      </View>

      {/* //passe en props le my current */}
      <BottomSheet{...myCurrentPokemon }/>
      <ImageBackground
        style={styles.imgEasterEggs}
        source={require('./../../assets/Images/pika.jpeg')}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  imgPokeStyle: {
    width: 220,
    height: 220,
    alignItems: 'center',
    flex: 1,
    opacity: 0.8,
    marginHorizontal: 90,
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
    margin: 2,
    fontWeight: 'bold',
    fontSize: 17,
    position: 'relative',
    textAlign: 'center',
    zIndex: 10,
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

  imgNextPokemon: {
    width: 50,
    height: 50,
    zIndex: 1,
    position: 'absolute',
    right: 0,
    top: -120,
    opacity: 0.5,
  },

  imgPreviousPokemon: {
    width: 50,
    height: 50,
    zIndex: 1,
    position: 'absolute',
    left: 0,
    top: -120,
    opacity: 0.5,
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
