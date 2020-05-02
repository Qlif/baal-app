//Core
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
//Actions
import * as Actions from "../../engine/core/crypto/actions";
//Selectors
import {volumeCryptoSelector, calcCryptoSelector, currentValuteSelector } from "../../engine/core/crypto/selectors";
//Style
import {Button, ButtonGroup, Row, Col} from "reactstrap";

function CalcCrypto() {

  const dispatch = useDispatch();
  const ARRAY_CURRENT_VALUTE = ["uah", "usd", "rub"];
  const currentVal =useSelector(currentValuteSelector);

  const onChangeEventHandler = useCallback((ev) => {
    if (isFinite(ev.target.value)) {
      dispatch(Actions.setVolumeCrypto(ev.target.value))
    }
  }, [dispatch]);

  const onClickEventHandler = useCallback((ev)=>{
    if(currentVal!==ev.target.textContent.toLowerCase())
    dispatch(Actions.setCurrentValute(ev.target.textContent.toLowerCase()));
  },[dispatch, currentVal])

  return (
    <>
      <Row>
        <Col sm="8">
        <label htmlFor="volume"><h4>Volume</h4></label>
          <input id="volume"
                 type="text"
                 onChange={onChangeEventHandler}
                 value={useSelector(volumeCryptoSelector)}
                 className="Volume"
          />
        </Col>
      </Row>
      <Row>
        <ButtonGroup>
          {ARRAY_CURRENT_VALUTE.map((curValute, index) => (
            <Col key={index} >
              <Button onClick={onClickEventHandler} className="calcCryptoButton" active={currentVal === curValute}>{curValute.toUpperCase()}</Button>
            </Col>
          ))}
        </ButtonGroup>
      </Row>
      <Row>
        <Col>
          <h4 className="calcCryptoSelector">{useSelector(calcCryptoSelector)}</h4>
        </Col>
      </Row>
    </>
  );
}

export default CalcCrypto;