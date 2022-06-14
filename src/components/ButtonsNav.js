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
 
  text: {
    fontSize: 14,
    textAlign: "center",
    
  },
});

export default ButtonsNav;