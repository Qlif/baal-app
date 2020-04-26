//Core
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
//Actions
import * as Actions from "../../engine/core/crypto/actions";
//Selectors
import {volumeCryptoSelector, calcCryptoSelector } from "../../engine/core/crypto/selectors";
//Style
import {Button, Row, Col} from "reactstrap";

function CalcCrypto() {

  const dispatch = useDispatch();
  const ARRAY_CURRENT_VALUTE = ["uah", "usd", "rub"];

  const onChangeEventHandler = useCallback((ev) => {
    dispatch(Actions.setVolumeCrypto(ev.target.value))
    console.log(ev.target.value);
  }, [dispatch]);

  const onClickEventHandler = useCallback((ev)=>{
    dispatch(Actions.setCurrentValute(ev.target.textContent.toLowerCase()));
  },[dispatch])


  console.log(useSelector(calcCryptoSelector));
  return (
    <>
      <Row>
        <label htmlFor="volume">Volume: </label>
        <input id="volume"
               type="text"
               onChange={onChangeEventHandler}
               value={useSelector(volumeCryptoSelector)}
        />
      </Row>
      <Row className="ButtonsVolume">
        {ARRAY_CURRENT_VALUTE.map((curValute, index) => (
          <Col key={index}>
            <Button onClick={onClickEventHandler} color="success">{curValute.toUpperCase()}</Button>
          </Col>
        ))}
      </Row>
      <Row>
        <span> {useSelector(calcCryptoSelector)}</span>
      </Row>
    </>
  );
}

export default CalcCrypto;