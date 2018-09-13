import React from "react";
import { StyleSheet } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider, connect } from "react-redux";
import thunkMiddleware from "redux-thunk";
import NativeTachyons from "react-native-style-tachyons";

import Index from "./routes/index";
import reducers from "./redux/reducers";

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

const App = () => {
  return (
    <Provider store={store}>
      <Index />
    </Provider>
  );
};

export default App;

NativeTachyons.build(
  {
    // fontRem: 20,
    colors: {
      palette: {
        orange: "#ee7202",
        white: "#f8f8ff",
        darkGrey: "#c4c4c4",
        lightGrey: "#dcdcdc",
        red: "#FF6347",
        black: "#000000"
      }
    }
  },
  StyleSheet
);
