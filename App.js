import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { AppNavigator } from "./src/navigation/Routes";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
