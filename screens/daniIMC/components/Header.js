import { View, Text, StyleSheet } from "react-native";
import React from "react";


const Header=({text})=>(
    <View style={styles.header}>
        <Text style={styles.headerText}>{text}</Text>
    </View>
)

export default Header;

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        padding: 10
    },
    headerText: {
      textAlign: 'center',
      fontSize: 42,
      color: '#333',
      fontWeight: '100',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  })