import React, { useState } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { PageSlider } from "@pietile-native-kit/page-slider";

export default function WelcomeScreen({ navigation }) {
  const [selectedPage, setSelectedPage] = useState(0);
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.image}
    >
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={{ fontSize: 20, textAlign: "center" }}>
        Elija su aplicación
      </Text>
      <PageSlider
        style={styles.pageSlider}
        selectedPage={selectedPage}
        onSelectedPageChange={setSelectedPage}
        onCurrentPageChange={() => {}}
        mode="card"
      >
        <View style={[styles.page]}>
          <View style={styles.flexColumn}>
            <Text style={styles.titulo}>App IMC Dani</Text>
            <Button
              title="Abrir"
              onPress={() =>
                navigation.navigate("AppDaniIMC", { title: "App IMC Dani" })
              }
              color={"#333"}
            ></Button>
          </View>
          <Text style={styles.descripcion}>
            Aplicacion que sirve para calcular el IMC según tu peso y altura.
            Dani Ferreiro
          </Text>
        </View>
        <View style={[styles.page]}>
          <View style={styles.flexColumn}>
            <Text style={styles.titulo}>App IMC Juan</Text>
            <Button
              title="Abrir"
              onPress={() =>
                navigation.navigate("AppJuanIMC", { title: "App IMC Juan" })
              }
              color={"#333"}
            ></Button>
          </View>
          <Text style={styles.descripcion}>Aplicacion que sirve para calcular el IMC según tu peso y altura.
            Juan Serrano</Text>
        </View>
        <View style={[styles.page]}>
          <View style={[styles.flexColumn, {gap:0.2}]}>
            <Text style={styles.titulo}>Piedra, papel,{"\n"} tijera</Text>
            <Button
              title="Abrir"
              onPress={() =>
                navigation.navigate("PiedraPapelTijeraApp", {
                  title: "Piedra, papel, tijera, lagarto, spock",
                })
              }
              color={"#333"}
            ></Button>
          </View>
          <Text style={styles.descripcion}>Juego de piedra, papel, tijera, lagarto, spock.</Text>
        </View>
        <View style={[styles.page]}>
          <View style={[styles.flexColumn, {gap:0.2}]}>
            <Text style={styles.titulo}>App simula{"\n"} crédito</Text>
            <Button
              title="Abrir"
              onPress={() =>
                navigation.navigate("AppSimulador", {
                  title: "Simula tu crédito",
                })
              }
              color={"#333"}
            ></Button>
          </View>
          <Text style={styles.descripcion}>App para simular la petición de un crédito</Text>
        </View>
      </PageSlider>
    </ImageBackground>
  );
}

WelcomeScreen.navigationOptions = {
  title: "WelcomeScreen",
};

const styles = StyleSheet.create({
  pageSlider: {
    width: "100%",
    marginTop: 150,
  },
  page: {
    alignItems: "center",
    height: 128,
    justifyContent: "space-evenly",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
  },
  image: {
    flex: 1,
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 100
  },
  flexColumn: {
    flexDirection: "column",
    justifyContent: "center",
    gap: 17,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  descripcion: {
    fontSize: 15,
    color: "#333",
    textAlign: "center",
    maxWidth: 100,
  },
});
