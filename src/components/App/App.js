// Core
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
// Components
import MainWidget from "../MainWidget";
import CalcCrypto from "../CalcCrypto";
import SelectedCrypto from "../SelectedCrypto";
// Style
import { Container, Row, Spinner} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import * as selectors from "../../engine/core/crypto/selectors";
import * as asyncAction from "../../engine/core/crypto/saga/asyncActions";

function App() {
  const dispatch =useDispatch();
  useEffect(() => {
    dispatch(asyncAction.getCryptoDataAsync());
  }, [dispatch]);
  if(useSelector(selectors.loaderSelector)) {

    return (<Spinner style={{width: '6rem', height: '6rem'}}/>)
  }
  return (
      <div className="App">
        <Container>
          <Row>
            <MainWidget/>
          </Row>
          <Row>
            <SelectedCrypto/>
          </Row>
          <CalcCrypto/>
        </Container>
      </div>
  );
}

export default App;
