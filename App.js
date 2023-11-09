import React from "react";
import WelcomeScreen from "./screens/WelcomeScreen";
import AppDaniIMC from "./screens/daniIMC/AppDaniIMC";
import AppJuanIMC from "./screens/juanIMC/AppJuanIMC";
import PiedraPapelTijeraApp from "./screens/juegoPiedra/AppJuegoReact";
import AppSimulador from "./screens/simuladorPrestamo/AppSimulador";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

export default createAppContainer(
  createStackNavigator(  { WelcomeScreen, AppDaniIMC, AppJuanIMC, PiedraPapelTijeraApp, AppSimulador},
    { initialRouteName: "WelcomeScreen" }));