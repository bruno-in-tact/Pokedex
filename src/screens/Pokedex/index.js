import React, {useState, useEffect, useCallback} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {PokemonsInfo} from '../../types/pokemonInfo';
import { ActivityIndicator } from 'react-native';

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
  const [pageCurrent, setpageCurrent] = useState(1);

  useEffect(() => {
    const init = async () => {
      setisLoading(true);
      const allPokemons = await fetchPokemons();
      setAllPokemons(allPokemons);
      setisLoading(false);
      console.log(`allPokemons`, allPokemon);
    };

    init();
  }, [pageCurrent]);

  const handleGoBack = useCallback(() => navigation.goBack(), [navigation]);

  // je crée un array pour récupérer plusieurs ou toutes les informations sur les pokemons
  // sur mon flatList data

  const arrayPokemonsInformations = [...allPokemons];

  const handleLoadMore = () => {
    if (!isLoading) {
      // setPageCurrent(pageCurrent + 1);
      // setIsLoading(true);
      () => fetchPokemons();
    }
  };

  const renderFooter = () => {
    return isLoading  ? (

      <ActivityIndicator size="large" />
    ) : null;
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
      <ScrollView>

      <FlatList
        style={{}}
        contentContainerStyle={styles.container}
        numColumns={2}
        data={allPokemons}
        keyExtractor={item => item.name}
        showsVerticalScrollIndicator={false}
        onEndReached={handleLoadMore}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={0}
        renderItem={({item, index}) => <Pokemons key={index} item={item} />}
      />
      </ScrollView>
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
  imgArrowBack: {
    position: 'absolute',
    left: 20,
    top: 30,
    width: 22,
    height: 13,
  },
  imgList: {
    position: 'absolute',
    right: 48,
    width: 16,
    height: 18,
    top: 90,
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
    marginTop: 170,
  },
  loader: {
    alignItems: 'center',
  },
});
