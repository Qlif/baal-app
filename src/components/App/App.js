// Core
import React from 'react';
import {Provider} from "react-redux";
// Store
import {store} from "../../engine/init/store";
// Components
import MainWidget from "../MainWidget";
import CalcCrypto from "../CalcCrypto";
import SelectedCrypto from "../SelectedCrypto";
// Style
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <MainWidget />
      <SelectedCrypto />
      <CalcCrypto />
    </Provider>
  );
}

export default App;
