import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground} from 'react-native';
import ButtonIMC from './ButtonIMC';
import Input from './Input';
import backgroundImage from './imc.png'

class AppJuanIMC extends Component{

    constructor(){
        super()
        this.state={
            inputValue: '',
            weight: 0,
            height: 0,
            result: ''
        }
        this.submitTodo = this.submitTodo.bind(this);
        this.inputHeight = this.inputHeight.bind(this);
        this.inputWeight = this.inputWeight.bind(this);
         
    }

inputHeight(height){
    this.setState({height})
}
inputWeight(weight){
    this.setState({weight})
}

submitTodo(){
    
    const heightInMeters = this.state.height / 100;
    const bmi = (this.state.weight / (heightInMeters * heightInMeters)).toFixed(2);

    if (bmi < 18.5) {
      return this.setState({result: 'Estas delgado, tu IMC es: ' + bmi});
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return this.setState({result: 'Estas en forma, tu IMC es: ' + bmi});
    } else {
      return this.setState({result: 'Estas obeso, tu IMC es: ' + bmi});
    }
    }


render() {
    const {result} = this.state
    return (
        <ImageBackground
        source={backgroundImage} // Reemplaza la URL con la ruta de tu imagen
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
        <Text style={styles.title}>Calculadora de IMC</Text>
        <Input inputValue={this.state.height} inputChange={(text) => this.inputHeight(text)} 
        inputHolder={"Introduzca su altura"}      
       />
        <Input inputValue={this.state.weight} inputChange={(text) => this.inputWeight(text)}          
        inputHolder={"Introduzca su peso"}
        />
        <ButtonIMC submitTodo={this.submitTodo} />
        <Text style={styles.result}>{result}</Text>
      </View>
      </ImageBackground>
    );
}


}

export default AppJuanIMC;

AppJuanIMC.navigationOptions={
  title: "AppJuanIMC"   
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5f5',
      flex: 1,
      alignItems: 'center',
      marginTop: 70,
      justifyContent: 'center',
    },
    content: {
      flex: 1
    },
    result: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: 'bold'
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333333',
        textTransform: 'uppercase',
      },
      backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      },
  })