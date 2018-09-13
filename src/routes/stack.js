import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "../components/home/main";
import Details from "../components/home/details";

const Stack = createStackNavigator({
  HomeScreen: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ffb347",
        elevation: 0
      },
      headerTitle: "HOME"
    })
  },
  DetailsScreen: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: "#ffb347",
        elevation: 0
      },
      headerTintColor: "#000",
      headerTitle: "DETAILS"
    })
  }
});

export default Stack;
