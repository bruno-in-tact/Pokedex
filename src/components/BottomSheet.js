import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import {textColor} from './src/assets/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {fetchPokemons} from './../cors/pokeApi';
import {pokeSpecies} from './../cors/pokeApi';
import {pokeGender} from './../cors/pokeApi';
import {pokeEvolution} from './../cors/pokeApi';


import ButtonsNav from './ButtonsNav';
import Pokemons from './Pokemons';
import About from './Details/About/index';
import BaseStats from './Details/BaseStats/index';
import Evolution from './Details/Evolution/index';
import Moves from './Details/Moves/index';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import getPokemonGender from './../utils/getPokemonGender';

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import {
  ImageBackground,
  FlatList,
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
  Alert,
} from 'react-native';
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomSheet = () => {
  const [pokemonInfoDescritpion, setPokemonInfoDescritpion] = useState(undefined);
  const [pokemonInfoGender, setPokemonInfoGender] = useState(undefined);
  const [pokemonEvolution, setPokemonEvolution] = useState(undefined);

  const navigation = useNavigation();
  const route = useRoute();
  const {currentPokemon} = route.params;
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);
  useState(undefined);
  const [currentTab, setCurrentTab] = useState(1);
  const handleDisplayTabs = i => {
    setCurrentTab(i);
  };

  const translateY = useSharedValue(0);
  const gesture = Gesture.Pan().onUpdate(event => {
    translateY.value = event.translationY;
  });

  const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });
  //const map = array.map(element => element * 2);
  //USE EFFECT POKEMONSINFOS
  console.log('JE FETCH FEREFERFREGERGREGERGKNERKGZNERZGREZGERGREGGREGR DANS BOTTOM SHEET HEIGHT: ',currentPokemon.height, 'XP : ', currentPokemon['base_experience'], currentPokemon.base_experience);
  useEffect(() => {
    console.log('JE FETCH POKEMONSPECIES DANS BOTTOM SHEET');
    
    const init = async () => {
      const myPokemon = await pokeSpecies(currentPokemon.number);
      setPokemonInfoDescritpion(myPokemon);
      console.log(
        'JETEST DANS MA FUNCTION ',
        myPokemon.egg_groups[0].name,
        'test gender----------------------------',
        myPokemon.gender_rate,
        'TEST BASE EXPERIENCE -------------',
        myPokemon.base_experience,
      );
    };
    init();
  }, []);

  useEffect(() => {
    console.log('JE FETCH GENDERPOKEMON DANS BOTTOM SHEET');
    const init = async () => {
      const myPokemon = await pokeGender(currentPokemon.gender_rate);
      //il faut donner l'int pokemon gender du pokemon en tant que paramettre
      setPokemonInfoGender(myPokemon.gender_rate);
      console.log('genderRATE TEST: ', myPokemon.gender_rate);
      console.log('FEVVVRVZVRZVZVZV',myPokemon.name)
  
    };
    init();
  }, []);
  const pokemonGendersRate = getPokemonGender(currentPokemon.gender_rate);

  console.log('geeeeeendeeeeeerrrrrrrrrrrrrrrrrrrr',pokemonGendersRate)
  // useEffect(() => {
  //   console.log('JE FETCH POKEMONEVOLUTION DANS BOTTOM SHEET');
  //   const init = async () => {
  //     const myPokemon = await pokeEvolution(currentPokemon.number);
  //     setPokemonInfoGender(myPokemon);
  //     console.log('POKEMON GENDER --------: ', myPokemon.name);	

  //     console.log('POKEMON EVOLUTION --------: ', myPokemon.chain.evolution_details	
  //     [0].species.name);
  //   };
  //   init();
  // }, []);


  

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
        <View style={styles.line} />
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
              {currentTab === 1 &&
                pokemonInfoDescritpion &&
                // pokemonInfoGender && 
                (
                  <About
                    height={currentPokemon.height}
                    weight={currentPokemon.weight}
                    xp={currentPokemon.base_experience}
                    abilities={currentPokemon.abilities}
                    hapiness={pokemonInfoDescritpion.base_happiness}
                    description={
                      pokemonInfoDescritpion.flavor_text_entries[6].flavor_text
                    }
                    egg_groups={pokemonInfoDescritpion.egg_groups[0].name}
                    // gender={pokemonInfoGender.name}
                    genderRate={pokemonInfoDescritpion.gender_rate}
                  />
                )}

              {currentTab === 2 && (
                <BaseStats
                  hp={currentPokemon.stats.hp}
                  attack={currentPokemon.stats.attack}
                  defense={currentPokemon.stats.defense}
                  specialAttck={currentPokemon.stats['special-attack']}
                  specialDef={currentPokemon.stats['special-defense']}
                  speed={currentPokemon.stats.speed}
                  total={
                    currentPokemon.stats.hp +
                    currentPokemon.stats.attack +
                    currentPokemon.stats.defense +
                    currentPokemon.stats.speed +
                    currentPokemon.stats['special-attack'] +
                    currentPokemon.stats['special-defense']
                  }
                />
              )}
              {currentTab === 3 && (
                <Evolution
                  id={currentPokemon.number}
                  img={currentPokemon.img}
                />
              )}

              {currentTab === 4 && <Moves id={currentPokemon.number} />}
            </View>
          </View>
        </SafeAreaView>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT / 2.4,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 1,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 25,
  },
});

export default BottomSheet;
