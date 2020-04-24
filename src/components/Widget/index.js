//Core
import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
//Action
import {setCurrentCrypto} from "../../engine/core/crypto/actions";
//Style
import {Media} from "reactstrap";

function Widget(data) {
  const dispach = useDispatch();

  const onclickHandler = useCallback(() => {
    dispach(setCurrentCrypto(data.currency));
  }, [dispach]);

  return (
    <Media onClick={onclickHandler}>
      <figure>
        <Media left object src={`./image/${data.currency.toUpperCase()}.png`} alt={data.currency.toUpperCase()}/>
        <figcaption>{data.currency.toUpperCase()}</figcaption>
      </figure>
      <Media body>
        <Media heading> USD: {data.usd}</Media>
        <Media heading> UAH: {data.uah}</Media>
        <Media heading> RUB: {data.rub}</Media>
      </Media>
    </Media>
  );
}

export default Widget;