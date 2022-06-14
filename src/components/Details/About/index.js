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

const About = ({
  hp,
  egg_groups,
  height,
  description,
  hapiness,
  weight,
  abilities,
  gender,
  genderRate,
  habitat,
  xp,
  ...otherprops
}) => {
  console.log('ABOUT descritpion entiere:', description);
  console.log('ABOUT descritpion GENDER:', gender);

  const genderRatioFemale = 12.5 * genderRate;
  const genderRatioMale = 12.5 * (8 - genderRate);

  return (
    <View style={styles.about}>
      <View style={styles.component}>
        <Text style={styles.descritpion}>{description}</Text>
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>Height </Text>
          <Text>Weight</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.data}>({height / 10} M)</Text>
            <Text style={styles.data}>({weight / 10} Kg)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Breeding</Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.5}}>
          Gender :
        </Text>
        {/* <Text style={{fontSize: 15}}>{gender}</Text> */}
        <Image
          style={styles.imgGender}
          source={require('./../../../assets/Images/genderMale.png')}
        />
        <Text style={{marginLeft: -30}}> {genderRatioMale}%</Text>
        <Image
          style={styles.imgGender}
          source={require('./../../../assets/Images/genderFemale.png')}
        />
        <Text style={{marginLeft: -30}}> {genderRatioFemale}%</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.5}}>
          Egg Groups :
        </Text>
        <Text style={{fontSize:15}}> {egg_groups}</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.5}}>
          Egg Cycle :
        </Text>
        <Text style={{fontSize:15}}> Grass</Text>
      </View>

      <Text style={styles.title}>Abilities</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '45%',
          marginVertical: 10,
        }}>
        {abilities.map(a => (
          <Text style={styles.abilities}>{a}</Text>
        ))}
      </View>

      <Text style={styles.title}>Training</Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '50%',
          marginVertical: 10,
        }}>
        <Text style={{fontSize: 15, fontWeight: 'bold', opacity: 0.5}}>
          {' '}
          Base Expérience :
        </Text>
      <Text style={{fontSize:15}}> {xp}</Text>
      </View>

      <Text style={styles.title}>Habitat</Text>
      <Text style={{fontSize:15}}>{habitat}</Text>
    </View>
  );
};
export default About;
const styles = StyleSheet.create({
  component: {
    width: '100%',
  },
  descritpion: {
    marginHorizontal: '10%',
  },
  imgGender: {},
  about: {
    marginVertical: 15,
    height: '100%',
    width: '100%',
  },
  text: {},
  title: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  abilities: {
    fontSize: 15,
  },

  container: {
    marginVertical: 20,
    width: '90%',
    borderRadius: 15,
    borderColor: 'grey',
    borderWidth: 0.2,
    marginHorizontal: '5%',
    padding: 15,
    fontSize: 15,
    fontWeight: 'bold',
  },

  data: {
    color: 'black',
    fontSize: 15,
    padding: 7,
  },
});
