import React from 'react';
import { View, Text, TouchableHighlight, StyleSheet} from 'react-native';

const ButtonIMC=({submitTodo}) => (
  
<View style={styles.buttonContainer}>
   <TouchableHighlight
   underlayColor='#efefef'
   onPress={submitTodo}
   style={[styles.button]}>
        <Text style={[styles.submit]}>Calcular</Text>
   </TouchableHighlight>
   </View>
  
)
//La view que se le mete a todo es para que se desacople de la tabla justo superior
export default ButtonIMC;

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'flex-end'
    },
    button: {
      height: 50,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: '#ffffff',
      width: 200,
      marginRight: 20,
      marginTop: 15,
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,.1)',
      justifyContent: 'center',
      alignItems: 'center'
    },
    submit: {
      color: '#666666',
      fontWeight: '600'
    }
  })