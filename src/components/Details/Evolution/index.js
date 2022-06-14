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

const Evolution = ({id, img}) => {
  return (
    <View style={styles.about}>
      <Text style={{marginVertical: 15, fontWeight: 'bold'}}>
        Evolution Chain
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
        <ImageBackground
          style={styles.imgPokeBall}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemon} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
        <Text
          style={{
            width: 50,
            height: 20,
            marginVertical: 25,
            position: 'absolute',
            marginHorizontal: 150,
            marginVertical: 50,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Lvl 16
        </Text>

        <ImageBackground
          style={styles.imgPokeBallRight}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemonRight} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
      </View>
      <View style=
      {{
        borderBottomColor: 'grey',
        borderBottomWidth: 0.3,
        marginVertical: 20
      }}
      />


<View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
        <ImageBackground
          style={styles.imgPokeBall}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemon} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
        <Text
          style={{
            width: 50,
            height: 20,
            marginVertical: 25,
            position: 'absolute',
            marginHorizontal: 150,
            marginVertical: 50,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Lvl 16
        </Text>

        <ImageBackground
          style={styles.imgPokeBallRight}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemonRight} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
      </View>

      <Text style={{marginVertical: 20, fontSize:14, fontWeight:'bold'}}>Mega Evolution</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
        <ImageBackground
          style={styles.imgPokeBall}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemon} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
        <Text
          style={{
            width: 50,
            height: 20,
            marginVertical: 25,
            position: 'absolute',
            marginHorizontal: 150,
            marginVertical: 50,
            fontSize: 14,
            fontWeight: 'bold',
          }}>
          Lvl 16
        </Text>

        <ImageBackground
          style={styles.imgPokeBallRight}
          source={require('./../../../assets/Images/poke.jpeg')}
        />
        <Image style={styles.imgPokemonRight} source={{uri: img}}></Image>

        <Image
          style={{
            width: 35,
            height: 20,
            marginHorizontal: 150,
            marginVertical: 25,
          }}
          source={require('./../../../assets/Images/Vector.png')}
        />
      </View>



    </View>
  );
};
export default Evolution;
const styles = StyleSheet.create({
  imgPokeBall: {
    height: 80,
    width: 80,
    position: 'absolute',
  },
  imgPokemon: {
    width: 76,
    height: 71,
    zIndex: 1,
    position: 'absolute',
    left: 0,
  },

  imgPokeBallRight: {
    height: 80,
    width: 80,
    right: -5,
    position: 'absolute',
  },
  imgPokemonRight: {
    width: 76,
    height: 71,
    zIndex: 1,
    position: 'absolute',
    right: 0,
  },
});
