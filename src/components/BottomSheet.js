import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useImperativeHandle} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');


const BottomSheet = () => {
const translateY = useSharedValue(0);

  const gesture = Gesture.Pan().onUpdate((event) =>{
      translateY.value = event.translationY;
  });

const rBottomSheetStyle = useAnimatedStyle(() => {
    return {
         transform: [{translateY: translateY.value}],
    }; 
});
  return (
    <GestureDetector gesture={gesture}>
    <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
      <View style={styles.line} />
      <Text>zdfezefefer</Text>
    </Animated.View>
  </GestureDetector>
  
  );
};

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    top: SCREEN_HEIGHT/ 1.5,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 1,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 25,
  },
});

export default BottomSheet;
