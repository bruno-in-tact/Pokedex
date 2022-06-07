import React, {useState, useEffect, useMemo} from 'react';
import ActionButton from 'react-native-action-button';
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
  Animated,
  TouchableWithoutFeedback,
} from 'react-native';

export default class FloattingButton extends React.Component {
  render() {
    return (
      <View style={{flex: 1, zIndex: 10000, bottom:'14%', right: 0 }}>
        {/* Rest of the app comes ABOVE the action button component !*/}
        <ActionButton style={styles.Boutton} buttonColor="#6C79DB"
         icon={<Image 
          source={require('./../assets/Images/filter.png')}
          style={styles.actionButtonIcon}
         style={{}}/>} >

          <ActionButton.Item
            buttonColor="#fff"
            title="All Type"
            onPress={() => console.log('notes tapped!')}>
            <Image
              source={require('./../assets/Images/Subtract.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#fff"
            title="All Gen"
            onPress={() => {}}>
            <Image
              source={require('./../assets/Images/Subtract.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#fff"
            title="Favorite Pokemon"
            onPress={() => {}}>
            <Image
              source={require('./../assets/Images/favorite.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#ffff"
            title="Search"
            onPress={() => {}}>
            <Image
              source={require('./../assets/Images/search.png')}
              style={styles.actionButtonIcon}
            />
          
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  actionButtonIcon: {
    fontSize: 20,
    height: 17,
    color: 'white',
    position:'absolute',
    
  },
});
