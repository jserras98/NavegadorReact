import { TouchableHighlight, View, Text, StyleSheet } from "react-native";
import React from "react";

const Button = ({ action, text }) => (
  <View style={styles.buttonContainer}>
    <TouchableHighlight
      underlayColor="#efefef"
      onPress={action}
      style={[styles.button]}
    >
      <Text style={styles.submit}>{text}</Text>
    </TouchableHighlight>
  </View>
);

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-end",
  },
  button: {
    backgroundColor: "#333", // Color de fondo del botón
    padding: 15,
    borderRadius: 10, // Bordes redondeados
    width: 200,
    alignItems: "center",
  },
  submit: {
    color: "white", // Color del texto
    fontSize: 18,
    fontWeight: "bold",
  },
});
