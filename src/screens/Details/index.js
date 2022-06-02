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
} from 'react-native';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id, name, type, color, img} = route.params;
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  const [pokemonData, setPokemonData] = useState(undefined);
  const [pokemonInfoDescritpion, setPokemonInfoDescritpion] =
    useState(undefined);

  const [currentTab, setCurrentTab] = useState(1);

  const handleDisplayTabs = i => {
    // 👇️ toggle shown state
    setCurrentTab(i);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  //USE EFFECT FETCHPOKEMONS
  useEffect(() => {
    console.log('test fetch all INFORMATIONS DANS LA PAGE DETAILS');
    const init = async () => {
      const allPokemons = await fetchPokemons();
      const myPokemon = allPokemons.find(poke => poke.number == id);
      console.log('mon pokemon :', myPokemon);
      console.log('mon pokeimon ID :', id);
      // console.log('mon pokeimon special :', myPokemon.stats.special.attack );
      setPokemonData(myPokemon);
    };
    init();
  }, []);

  //USE EFFECT POKEMONSINFOS
  useEffect(() => {
    console.log('test POKEMONiNFO LA PAGE DETAILS');
    const init = async () => {
      const allPokemons = await pokeSpecies(id);
      setPokemonInfoDescritpion(pokemonInfoDescritpion);
      consle.log('test descritpion de mon pokemon', myPokemonDescription);
    };
    init();
  }, []);

  return (
    // container view qui prend l'écran entier
    <View style={{flex: 1, width: '100%', height: '100%'}}>
      {/* CONTAINER IMG BACKGROUND JE MET TOUT DEDANS */}
      <View
        style={{
          ...styles.imgBackground,
          backgroundColor: getColorByPokemonType(type),
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
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.id}>#{String(id).padStart(3, '0')}</Text>
        <View style={styles.itemContainer}>
          <Text style={styles.typesPokemon}>{type}</Text>
        </View>
        <ImageBackground
          style={styles.imgPokeStyle}
          source={require('./../../assets/Images/Element.png')}
        />
        <ImageBackground
          style={styles.imgPokemon}
          source={{uri: img}}></ImageBackground>

        <View style={styles.compnentsContainer}>
          <SafeAreaView style={styles.container}>
            <View style={styles.parent}>
              <View
                style={{
                  height: 30,
                  width: 400,
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  style={{height: 30, width: 100}}
                  onPress={() => {
                    handleDisplayTabs(1);
                  }}>
                  <ButtonsNav text={'About'} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{height: 30, width: 100}}
                  onPress={() => {
                    handleDisplayTabs(2);
                  }}>
                  <ButtonsNav text={'Base Stats'} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{height: 30, width: 100}}
                  onPress={() => {
                    handleDisplayTabs(3);
                  }}>
                  <ButtonsNav text={'Evolution'} />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{height: 30, width: 100}}
                  onPress={() => {
                    handleDisplayTabs(4);
                  }}>
                  <ButtonsNav text={'Move'} />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  backgroundColor: 'white',
                  height: '100%',
                  width: 400,
                  display: 'flex',
                  paddingHorizontal: 30,
                }}>
                {currentTab === 1 && pokemonData && (
                  <About
                    id={pokemonData.id}
                    height={pokemonData.height}
                    weight={pokemonData.weight}
                  />
                )}

                {currentTab === 2 && pokemonData && (
                  <BaseStats
                    id={pokemonData.id}
                    hp={pokemonData.stats.hp}
                    attack={pokemonData.stats.attack}
                    defense={pokemonData.stats.defense}
                    specialAttck={pokemonData.stats.specialAttack}
                    specialDef={pokemonData.stats.specialDefense}
                    speed={pokemonData.stats.speed}
                    total={
                      pokemonData.stats.hp +
                      pokemonData.stats.attack +
                      pokemonData.stats.defense +
                      pokemonData.stats.speed
                      // + pokemonData.stats.specialAttck
                      // + pokemonData.stats.specialDef
                    }
                  />
                )}

                {currentTab === 3 && pokemonData && (
                  <Evolution
                    id={pokemonData.id}
                 
                  />
                )}

                {currentTab === 4 && pokemonData && (
                  <Moves
                    id={pokemonData.id}
              
                  />
                )}
              </View>
            </View>

            <View>
              {/* { shouldShow, pokemonData  &&  (
          <About
            id={pokemonData.id}
            height={pokemonData.height}
            weight={pokemonData.weight}
          />
        )} */}
            </View>
          </SafeAreaView>
        </View>

        {/* FIN PREMIERE PARTIE CONTAINER */}

        {/* <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Press Here</Text>
      </TouchableOpacity> */}
        {/*TEST CALL COMPONENTS */}
      </View>

      {/* {pokemonData && (
        <BaseStats
          id={pokemonData.id}
          hp={pokemonData.stats.hp}
          attack={pokemonData.stats.attack}
          defense={pokemonData.stats.defense}
          specialAttck={pokemonData.stats.specialAttack}
          specialDef={pokemonData.stats.specialDefense}
          speed={pokemonData.stats.speed}
          total={
            pokemonData.stats.hp +
            pokemonData.stats.attack +
            pokemonData.stats.defense +
            pokemonData.stats.speed
            // + pokemonData.stats.specialAttck
            // + pokemonData.stats.specialDef
          }
        />
      )}  */}

      {/* {shouldShow && <Evolution />} 
      {/*TEST RECUPERATION DES DONNEES PART SECONDE CALL API */}
    </View>
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
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  parent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingTop: 40,
  },
  compnentsContainer: {
    width: '100%',
    height: 500,
    borderRadius: 20,
    top: -50,
    backgroundColor: 'white',
  },

  typesPokemon: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    position: 'relative',
    textAlign: 'center',
 
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

  // flat list
  container: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  test: {
    zIndex: 1000000,
    width: '100%',

    height: 100,
  },
});
