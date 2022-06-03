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

const About = ({hp, height, description, weight, abilities, ...otherprops}) => {
  console.log('TEST STATS dans aboutdzdzdzedzefezfezDZEZFZF', abilities);

  return (
    <View style={styles.about}>
      <View style={styles.component}>
        <Text style={styles.text}>
          Bulbasaur can be seen napping in bright sunlight. There is a seed on
          its back. By soaking up the sun's rays, the seed grows progressively
          larger.
        </Text>
      </View>

      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>Height </Text>
          <Text>Weight</Text>
        </View>
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Text style={styles.data}>({height / 10} cm)</Text>
            <Text style={styles.data}>({weight / 10} kg)</Text>
          </View>
        </View>
      </View>

      <Text style={styles.title}>Breeding</Text>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'70%', marginVertical:10}}>
      <Text style ={{fontSize:15, fontWeight:'bold', opacity:0.5}}>Gender</Text>
      <Image
         style={styles.imgGender}
         source={require('./../../../assets/Images/genderMale.png')}
      />
      <Text style={{marginLeft:-30}}> 100%</Text>
      <Image
         style={styles.imgGender}
         source={require('./../../../assets/Images/genderFemale.png')}
      />
      <Text style={{marginLeft:-30}}> 90%</Text>
      </View>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'50%', marginVertical:10}}>
      <Text style ={{fontSize:15, fontWeight:'bold', opacity:0.5}}>Egg Groups</Text>
      <Text style={{marginLeft:-30}}> Monster</Text>  
      </View>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'45%', marginVertical:10}}>
      <Text style ={{fontSize:15, fontWeight:'bold', opacity:0.5}}>Egg Cycle</Text>
      <Text style={{marginLeft:-30}}> Grass</Text>  
      </View>


      <Text style={styles.title}>Abilities</Text>

      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'45%', marginVertical:10}}>
      <Text style={{marginLeft:-30}}>{abilities}</Text>  
      </View>


    </View>
  );
};
export default About;
const styles = StyleSheet.create({
  component: {
    width: '100%',
  },

  imgGender: {
   
  },
  about: {
    marginVertical:15,
    height: '100%',
    width: '100%',

  },
  text: {

  },
  title: {
    fontSize: 18,
    color:'black',
    fontWeight:'bold',
    marginVertical: 10,
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
