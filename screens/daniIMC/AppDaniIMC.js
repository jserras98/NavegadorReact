import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "./components/Button";
import React from "react";

class AppDaniIMC extends React.Component {
  constructor() {
    super();
    this.state = {
      altura: '0',
      peso: '0',
      imc: 0,
      texto: "",
    };

    this.image = { uri: "https://legacy.reactjs.org/logo-og.png" };

    this.calcularImc = this.calcularImc.bind(this);
    this.inputAlturaChange = this.inputAlturaChange.bind(this);
    this.inputPesoChange = this.inputPesoChange.bind(this);
  }


  inputAlturaChange(altura) {
    if (!isNaN(altura))
      this.setState({ altura });
  }

  inputPesoChange(peso) {
    if (!isNaN(peso))
      this.setState({ peso });
  }

  calcularImc() {
    const { altura, peso } = this.state;
    if (altura <= 0 || peso <= 0) {
      return;
    }
    const alturaMetros = altura / 100;
    const imc = (peso / (alturaMetros * alturaMetros)).toFixed(2);
    this.setState({ imc });
    let texto = "";
    if (imc < 18.5) {
      texto = "Muy delgado";
      this.setState({ texto });
    } else if (imc < 25 && imc >= 18.5) {
      texto = "Normal";
      this.setState({ texto });
    } else if (imc < 30 && imc >= 25) {
      texto = "Gordo";
      this.setState({ texto });
    } else if (imc >= 30) {
      texto = "Obeso";
      this.setState({ texto });
    }
  }

  render() {
    return (
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <Image style={{marginTop: 30}}
            source={require("./assets/image.png")}
          />
          <Header text="CALCULADORA DE IMC" />
          <View style={styles.flexRow}>
            <Input
              inputValue={this.state.altura}
              inputChange={(text) => this.inputAlturaChange(text)}
              texto='Altura'
            />
            <Input
              inputValue={this.state.peso}
              inputChange={(text) => this.inputPesoChange(text)}
              texto='Peso'
            />
          </View>
          <Button text="Calcular" action={this.calcularImc} />
          <Text style={styles.imc}>{this.state.imc}</Text>
          <Text style={styles.texto}>{this.state.texto}</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default AppDaniIMC;

AppDaniIMC.navigationOptions={
  title: "AppDaniIMC"   
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 25,
    borderRadius: 25,
  },
  flexRow: {
    flexDirection: "row",
    gap: 120,
  },
  imc: {
    fontSize: 70,
    color: "#333",
    fontWeight: "bold",
  },
  texto: {
    fontSize: 45,
    color: "#333",
    fontWeight: "bold",
  },
  image: {
    flex: 1,

    alignItems: "center",
  },
});
