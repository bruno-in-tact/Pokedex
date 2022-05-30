import React, {useState, useEffect, useCallback} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import getColorByPokemonType from './../../utils/pokemonTypeColor';
import ButtonsNav from './../../components/ButtonsNav';
import {fetchPokemons} from './../../cors/pokeApi';
import {pokemonsDetails} from './../../cors/pokeApi';

import Pokemons from './../../components/Pokemons';

import About from './../../components/Details/About/index';
import BaseStats from './../../components/Details/BaseStats/index';
// import Evolution from '/../../components/Details/Evolution/index'
// import Moves from '/../../components/Details/Moves/index'

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

  const [allPokemons, setAllPokemons] = useState([]);
  const [active, setActive] = useState('about');
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('test fetch all INFORMATIONS DANS LA PAGE DETAILS');
    const init = async () => {
      const allPokemons = await fetchPokemons();
      setAllPokemons(allPokemons);
    };
    init();
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}>
      <TouchableOpacity onPress={handleGoBack}>
        <ImageBackground
          style={styles.imgArrowBack}
          source={require('./../../assets/Images/white.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>
      <ImageBackground />

      <ImageBackground
        style={styles.heart}
        source={require('./../../assets/Images/heart.png')}
      />
      <View
        style={{
          ...styles.imgBackground,
          backgroundColor: getColorByPokemonType(type),
        }}>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.id}>
          {'#00'}
          {id}
        </Text>
        <View style={styles.itemContainer}>
          <Text style={styles.typesPokemon}>{type}</Text>
        </View>
      </View>
      <ImageBackground
        style={styles.imgPokemon}
        source={{uri: img}}></ImageBackground>

      <View style={styles.compnentsContainer}>
        <SafeAreaView style={styles.container}>
          <View style={styles.parent}>
            {/* <Button title={'About'} onPress={() => setShow(!show) }  style={styles.button}/>
      {show && <About />} */}

            <ButtonsNav onPress={() => setActive('about')} text={'About'} />
            <ButtonsNav
              onPress={() => setActive('BaseStats')}
              text={'BaseStats'}
            />
            <ButtonsNav text={'Evolution'} />
            <ButtonsNav text={'Moves'} />
          </View>
        </SafeAreaView>
        {/*TEST CALL COMPONENTS */}
        <View style={{width: '100%', height: 500}}>
          {active === 'about' && <About />}
          {active === 'BaseStats' && <BaseStats />}
        </View>
        <ScrollView>
          {/* <FlatList
          style={{}}
          contentContainerStyle={styles.container}
          numColumns={1}
          data={allPokemons}
          keyExtractor={item => item.name}
          renderItem={({item, index}) => <About key={index} item={item} />}
        /> */}
{/* 
          {allPokemons.map((item, index) => (
            <About
              key={index}
              id={item.id}
              height={item.height}
              weight={item.weight}
              descritpion={item.description}
            />
          ))} */}
        </ScrollView>
      </View>

      {/*TEST RECUPERATION DES DONNEES PART SECONDE CALL API */}
    </View>
  );
}

const styles = StyleSheet.create({
  imgPokeStyle: {
    position: 'absolute',
    right: 0,
    width: 249,
    height: 290,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },

  parent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    top: -20,
  },
  compnentsContainer: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: 'white',
    top: 300,
    position: 'absolute',
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
    top: 87,
    position: 'absolute',
    marginRight: 10,
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
    height: 330,
    position: 'absolute',
    zIndex: -1111,
  },
  imgPokemon: {
    position: 'absolute',
    width: 200,
    height: 224,
    top: 130,
    zIndex: 100000,
    alignItems: 'center',
    marginHorizontal: 100,
  },
  imgArrowBack: {
    position: 'absolute',
    left: 20,
    top: 30,
    width: 22,
    height: 13,
    zIndex: 100,
  },
  heart: {
    position: 'absolute',
    right: 28,
    width: 16,
    height: 18,
    top: 30,
  },
  title: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    width: 316,
    top: 125,
    left: -90,
  },

  // flat list
  container: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
