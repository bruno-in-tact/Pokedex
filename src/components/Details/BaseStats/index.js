import {StyleSheet, Text, View} from 'react-native';
import {Animated} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

const BaseStats = ({
  hp,
  attack,
  defense,
  specialAttck,
  specialDef,
  speed,
  total,
  ...otherprops
}) => {

  // PROGRESS BAR
  const counter = useRef(new Animated.Value(0)).current;
  const countInterval = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    countInterval.current = setInterval(() => setCount(old => old + 5), 1000);
    return () => {
      clearInterval(countInterval);
    };
  }, []);

  useEffect(() => {
    load(count);
    if (count >= 100) {
      setCount(100);
      clearInterval(countInterval);
    }
  }, [count]);

  const load = count => {
    Animated.timing(counter, {
      toValue: count,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const width = counter.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 100],
    extrapolate: 'clamp',
  });

  const widthTotal = counter.interpolate({
    inputRange: [0, 600],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  // end progress bar

  return (
    <View style={styles.BaseStats}>
      <View style={styles.container}>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: hp, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>HP</Text>
          <Text style={styles.stats}>{hp}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: attack, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Attack</Text>
          <Text style={styles.stats}>{attack}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: defense, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Defense</Text>
          <Text style={styles.stats}>{defense}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: specialAttck, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Sp.Atk</Text>
          <Text style={styles.stats}>{specialAttck}</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: specialDef, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Sp.Def</Text>
          <Text style={styles.stats}>{specialDef}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', width: speed, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Speed</Text>
          <Text style={styles.stats}>{speed}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.progressBar}>
            <Animated.View
              style={
                ([StyleSheet.absoluteFill],
                {backgroundColor: '#4BC07A', widthTotal :total, height: 5})
              }></Animated.View>
          </View>
          <Text style={styles.menu}>Total</Text>
          <Text style={styles.stats}>{total}</Text>
        </View>
        <View style={styles.container}>
          <Text style={{...styles.text, marginTop:30,}}>Type defenses</Text>
        </View>
      </View>
    </View>
  );
};

export default BaseStats;

const styles = StyleSheet.create({
  BaseStats: {
    height: '100%',
    padding: 5,
  },
  progressBar: {
    height: 6,
    width: '35%',
    backgroundColor: 'grey',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 5,
    opacity: 0.4,
    position:'absolute',
    right:170,
    
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    zIndex: 1000,
    marginTop: 10,
    color: '#000',
  },

  menu: {
    position: 'absolute',
    left: 0,
    color: 'grey',
  },

  stats: {
    position: 'relative',
    left: -140,
    marginTop: 5,
  },

  container: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
