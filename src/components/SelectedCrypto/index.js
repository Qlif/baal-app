//Core
import React from "react";
import {useSelector} from "react-redux";
//Selector
import {currentCryptoSelector} from "../../engine/core/crypto/selectors";
//Style
import {Col} from "reactstrap";

function SelectedCrypto() {
  return (
    <Col className="SelectedCrypto">
      <h3>Selected coin: {useSelector(currentCryptoSelector).toUpperCase()}</h3>
    </Col>
  )
}

export default SelectedCrypto;