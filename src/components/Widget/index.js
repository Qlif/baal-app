//Core
import React from "react";

function Widget(props) {
    const {item}=props;
    const {currency,rub, uah, usd} = item;
    return(
        <>
            <img src ={`./image/${currency.toUpperCase()}.png`}/>
        <span> {currency}</span><br/>
        <span> {rub}</span><br/>
        <span> {uah}</span><br/>
        <span> {usd}</span><br/>
         </>
    );
}
export default Widget;