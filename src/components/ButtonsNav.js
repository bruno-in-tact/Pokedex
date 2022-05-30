import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ButtonsNav = ({ text }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "25%",
    top:60,

  },
  text: {
    fontSize: 13,
    color: "grey",
    textAlign: "center",
  },
});

export default ButtonsNav;