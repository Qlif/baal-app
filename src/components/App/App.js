// Core
import React from 'react';
import {Provider} from "react-redux";
// Store
import {store} from "../../engine/init/store";
// Components
import MainWidget from "../MainWidget";
// Style
import './App.css';
// TODO Add provider
function App() {
  return (
    <Provider store={store}>
      <MainWidget />
    </Provider>
  );
}

export default App;
