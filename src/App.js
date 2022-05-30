import React from 'react';
import {Text, View, StatusBar, SafeAreaView} from 'react-native';
import {textColor} from './src/assets/colors';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './screens/Home'
import Pokedex from './screens/Pokedex';
import Details from './screens/Details';


const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen name="Details" component={Details} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;