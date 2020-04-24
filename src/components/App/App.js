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
import {Container,Row,Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row>
            <MainWidget/>
          </Row>
          <Row>
            <SelectedCrypto/>
          </Row>
          <Row>
            <CalcCrypto/>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
