import React from 'react';
import { Text, TouchableHighlight, StyleSheet} from 'react-native';

const Button=({action, texto}) => (
  

   <TouchableHighlight
   underlayColor='#efefef'
   onPress={action}
   style={[styles.button]}>
        <Text style={[styles.text]}>{texto}</Text>
   </TouchableHighlight>
 
  
)
//La view que se le mete a todo es para que se desacople de la tabla justo superior
export default Button;

const styles = StyleSheet.create({
    button: {
      alignItems: 'flex-end',
      backgroundColor: '#333',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderRadius: 5,
      marginBottom: 10,

    },
    text: {
      fontSize: 20,
      fontWeight: '600',
      color: 'white',

    }
  })