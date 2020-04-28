//Core
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
//Actions
import * as Actions from "../../engine/core/crypto/actions";
//Selectors
import {volumeCryptoSelector, calcCryptoSelector } from "../../engine/core/crypto/selectors";
//Style
import {Button, ButtonGroup, Row, Col} from "reactstrap";

function CalcCrypto() {

  const dispatch = useDispatch();
  const ARRAY_CURRENT_VALUTE = ["uah", "usd", "rub"];

  const onChangeEventHandler = useCallback((ev) => {
    if (isFinite(ev.target.value)) {
      dispatch(Actions.setVolumeCrypto(ev.target.value))
    }
  }, [dispatch]);

  const onClickEventHandler = useCallback((ev)=>{
    dispatch(Actions.setCurrentValute(ev.target.textContent.toLowerCase()));
  },[dispatch])


  console.log(useSelector(calcCryptoSelector));
  return (
    <>
      <Row>
        <Col sm="11" md={{ size: 6, offset: 3 }}>
        <label htmlFor="volume">Volume</label>
        <input id="volume"
               type="text"
               onChange={onChangeEventHandler}
               value={useSelector(volumeCryptoSelector)}
               className="Volume"
        />
        </Col>
      </Row>
      <Row className="ButtonsVolume">
        <ButtonGroup>
          {ARRAY_CURRENT_VALUTE.map((curValute, index) => (
            <Col key={index}>
              <Button onClick={onClickEventHandler} color="success">{curValute.toUpperCase()}</Button>
            </Col>
          ))}
        </ButtonGroup>
      </Row>
      <Row xs="1">
        <Col sm="12" md={{ size: 6, offset: 3 }} >
          <span className="calcCryptoSelector"> {useSelector(calcCryptoSelector)}</span>
        </Col>
      </Row>
    </>
  );
}

export default CalcCrypto;