import { View, TextInput, StyleSheet, Text } from "react-native";
import React from "react";

const Input = ({ inputChange, inputValue, texto }) => (
  <View style={styles.container}>
    <TextInput
      value={inputValue}
      style={styles.input}
      onChangeText={inputChange}
      placeholder="0"
      placeholderTextColor="#333"
      keyboardType="numeric"
      maxLength={3}
    />
    <Text style={styles.texto}>{texto}</Text>
  </View>
);

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 60,
    color: "#333",
    fontWeight: "bold",
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
