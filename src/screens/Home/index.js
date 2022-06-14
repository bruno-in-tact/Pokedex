import React, {useState, useEffect} from 'react';
import {textColor} from './src/assets/colors';
import {BACKGROUNDCOLORS} from './../../assets/colors';
import { useNavigation } from '@react-navigation/native';
import News from './../../components/News'



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
import {fetchPokemonDetails} from './../../cors/pokeApi';
import Pokemons from './../../components/Pokemons';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const searchPokemon = async (pokemonName) => {
    const response = await fetchPokemons();
    setAllPokemons(allPokemons);
  }
  useEffect(()=>{
      searchPokemon('Pikachu')
  }, []);

// if (searchPokemon) {
//   navigation.navigate('Details', {
//     searchPokemon,
//     from:'searchTerm',
//   })
// }

  return (
    <View style={styles.backgroundHomeContainer}>
      <ImageBackground
        style={styles.imgPokeStyle}
        source={require('./../../assets/Images/pokeball.png')}>
        <Text style={styles.title}>What Pokemon are you looking for?</Text>
      </ImageBackground>
      <View style={styles.searchCont}>
        <TextInput
          style={styles.searchfeild}
          placeholder="Search Pokemons"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
  


      </View>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity>
            <View style={styles.imgContainer}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() =>
                    navigation.navigate('Pokedex', {
                    })
                  }>
                  <ImageBackground
                    style={styles.imgList}
                    source={require('./../../assets/Images/Pokedex.png')}></ImageBackground>
                </TouchableOpacity>


                <ImageBackground
                  style={styles.imgList}
                  source={require('./../../assets/Images/Moves.png')}></ImageBackground>
              </View>

              <View style={{flexDirection: 'row'}}>
                <ImageBackground
                  style={styles.imgList}
                  source={require('./../../assets/Images/Abilities.png')}></ImageBackground>
                <ImageBackground
                  style={styles.imgList}
                  source={require('./../../assets/Images/Items.png')}></ImageBackground>
              </View>

              <View style={{flexDirection: 'row'}}>
                <ImageBackground
                  style={styles.imgList}
                  source={require('./../../assets/Images/Location.png')}></ImageBackground>
                <ImageBackground
                  style={styles.imgList}
                  source={require('./../../assets/Images/Type.png')}></ImageBackground>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <News/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 180,
  },
  backgroundHomeContainer: {
      backgroundColor:'white',
      borderRadius:15,
  },
  imgContainer: {
    marginTop: 90,
  },
  imgList: {
    width: 155,
    height: 80,
  },
  imgPokeStyle: {
    position: 'absolute',
    right: 0,
    width: 249,
    height: 290,
  },

  title: {
    position: 'absolute',
    fontSize: 32,
    fontWeight: 'bold',
    width: 316,
    top: 95,
    left: -90,
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  searchCont: {
    position: 'absolute',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 70,
    zIndex: 1,
    marginTop: 10,
  },
  searchfeild: {
    height: 45,
    borderWidth: 1,
    // backgroundColor: BACKGROUNDCOLORS.search,
    textAlign: 'center',
    width: 334,
    borderRadius: 50,
    marginTop: 180,
  },
 
});
