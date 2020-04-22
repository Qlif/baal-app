//Core
import React,{useCallback} from "react";
import {useDispatch}from "react-redux";
//Action
import {setCurrentCrypto} from "../../engine/core/crypto/actions";

function Widget(data) {
    const dispach = useDispatch();

    const onclickHandler = useCallback(()=>{
        dispach(setCurrentCrypto(data.currency));
    },[dispach]);

    return(
        <div onClick={onclickHandler}>
            <img src ={`./image/${data.currency.toUpperCase()}.png`}/>
        <span> {data.currency.toUpperCase()}</span><br/>
        <span> USD: {data.usd}</span><br/>
        <span> UAH: {data.uah}</span><br/>
        <span> RUB: {data.rub}</span><br/>
         </div>
    );
}
export default Widget;