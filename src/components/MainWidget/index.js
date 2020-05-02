//Core
import React from "react";
import {useSelector} from "react-redux";
//Selectors
import * as selectors from "../../engine/core/crypto/selectors";
//Components
import Widget from "../Widget";
//Style
import {Col} from "reactstrap";

function MainWidget() {
  const data = (useSelector(selectors.cryptowidgetSelector));

  return (<>
        {Object.keys(data).map((currency, index) => (
          <Col xs={{size:10, offset:0}} sm={{size:10, offset:0}} md ={{size:4, offset:0}} xl="4" key={index}>
              <Widget  {...data[currency]} />
          </Col>
        ))}
  </>)
}

export default MainWidget;
