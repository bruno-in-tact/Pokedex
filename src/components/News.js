import React, {useState, useEffect, useCallback, Button} from 'react';
import {textColor} from './src/assets/colors';
import {useNavigation} from '@react-navigation/native';
import {BACKGROUNDCOLORS} from './../assets/colors';
import HyperLink from 'react-native-hyperlink';

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
  Linking,
  LinkingIOS,
  TouchableHighlight,
  Alert,
} from 'react-native';
const url = "https://www.pokemon.com/us/pokemon-news";

// JE TRICHE POUR LES NEWS NE TROUVANT PAS D'API news pokemon et ne voulant pas trop perdre du temps
export default function News() {
  const openURL = async url => {
    const isSupported = await Linking.canOpenUrl(url);
    if (isSupported) {
      await Linking.openURL(url);
    } else {
      Alert.alert('cant open this url');
    }
  };

  return (
    <View style={styles.backgroundHomeContainer}>
      <Text style={styles.title}>Pokémon News</Text>

      <TouchableHighlight
        onPress={() => {
          openURL(url);
        }}>
        <Image
          source={require('./../assets/Images/news.png')}
          style={styles.imgNews}
        />
      </TouchableHighlight>
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
    // backgroundColor:   POKEMON_TYPE_COLORS.search,
  },
  imgContainer: {
    marginTop: 90,
  },
  imgNews: {
    marginTop: 50,
    width: '100%',
    height: 200,
  },
  imgPokeStyle: {
    position: 'absolute',
    right: 0,
    width: 249,
    height: 290,
  },

  title: {
    position: 'absolute',
    fontSize: 20,
    fontWeight: 'bold',
    width: 316,
    marginTop: 20,
    left: 45,
  },
  card: {},
});
