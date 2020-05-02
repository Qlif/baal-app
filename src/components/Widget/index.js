//Core
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
//Action
import {setCurrentCrypto} from "../../engine/core/crypto/actions";
//Selectors
import {currentCryptoSelector} from "../../engine/core/crypto/selectors";
//Style
import {Media} from "reactstrap";

function Widget(data) {
  const dispach = useDispatch();
  const currentCrypto =useSelector(currentCryptoSelector);

  const onclickHandler = useCallback(() => {
    if(currentCrypto!==data.currency)
    dispach(setCurrentCrypto(data.currency));
  }, [dispach, data.currency, currentCrypto]);

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