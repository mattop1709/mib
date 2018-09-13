import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "../components/home/main";
import Details from "../components/home/details";

const Stack = createStackNavigator({
  HomeScreen: {
    screen: Home
  },
  DetailsScreen: {
    screen: Details
  }
});

export default Stack;
