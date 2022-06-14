import React, {useState, useEffect, useCallback} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {PokemonsInfo} from '../../types/pokemonInfo';
import {ActivityIndicator} from 'react-native';
import FloattingButton from './../../components/FloatingButton';

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
import {fetchPokemons} from './../../cors/pokeApi';
import Pokemons from './../../components/Pokemons';

export default function Pokedex() {
  const navigation = useNavigation();
  const [allPokemons, setAllPokemons] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  useEffect(() => {
    const init = async () => {
      setisLoading(true);
      // faire transformation ici
      //liste des pokemons entre offset et limite, rajouté a la liste de pokemon existant les pokemons retourné
      const newPokemons = await fetchPokemons(offset);
      // je destructure les pokemons en tableau et j'ajoute les new pokemons avec offset
      setAllPokemons([...allPokemons, ...newPokemons]);
      setisLoading(false);
      console.log('USE EFFECT OFFSET ', offset);
      //transformer mon page current en offset
    };
    init();
  }, [offset]);
  // je crée un array pour récupérer plusieurs ou toutes les informations sur les pokemons
  // sur mon flatList data

  const arrayPokemonsInformations = [...allPokemons];

  function handleLoadMore() {
    if (!isLoading) {
      setOffset(offset + 20);
    }
  }

  function renderFooter() {
    return isLoading ? <ActivityIndicator size="large" /> : null;
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: 20,
        // backgroundColor: "red",
      }}>
      <TouchableOpacity onPress={handleGoBack}>
        <ImageBackground
          style={styles.imgArrowBack}
          source={require('./../../assets/Images/back.png')}
          resizeMode="cover"
        />
      </TouchableOpacity>

      <ImageBackground
        style={styles.imgPokeStyle}
        source={require('./../../assets/Images/pokeball.png')}
        resizeMode="cover">
        <Text style={styles.title}>Pokedex</Text>
      </ImageBackground>

      <ImageBackground
        style={styles.imgList}
        source={require('./../../assets/Images/list.png')}
      />

      {/* --------------------------------------components POKEMONS */}
      
       <FlatList
        style={{overflow:'hidden'}}
        contentContainerStyle={styles.container}
        numColumns={2}
        data={allPokemons}
        keyExtractor={item => item.name}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0.1}        
        renderItem={({item, index}) => <Pokemons key={index} item={item} />}
      /> 

      <FloattingButton />
    </View>
  );
}

const styles = StyleSheet.create({
  imgPokeStyle: {
    position: 'absolute',
    right: 0,
    width: 249,
    height: 300,
    top: -18,
  },
  imgArrowBack: {
    position: 'absolute',
    left: 20,
    top: 30,
    width: 22,
    height: 13,
    zIndex:10000000000,
  },
  imgList: {
    position: 'absolute',
    right: 48,
    width: 16,
    height: 18,
    top: 80,
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
    marginHorizontal: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 170,
    zIndex: 0,
    overflow:'hidden',
    
  },
  loader: {
    alignItems: 'center',
  },
});
