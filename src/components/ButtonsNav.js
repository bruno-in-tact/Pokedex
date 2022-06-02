import React, {useState, useEffect, useCallback} from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";




const ButtonsNav = ({ text }) => {
  const [shouldShow, setShouldShow] = useState(true);

  return (
    <View style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  button: {
    //width: "33%",
  //  top:60,
  //  marginHorizontal:'10%'
  zIndex:100000,
  },
  text: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
});

export default ButtonsNav;