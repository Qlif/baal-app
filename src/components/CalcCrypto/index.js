//Core
import React, {useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
//Actions
import * as Actions from "../../engine/core/crypto/actions";
//Selectors
import { volumeCryptoSelector } from "../../engine/core/crypto/selectors";

function CalcCrypto() {

    const dispatch = useDispatch();

    const onChangeEventHandler = useCallback((ev)=>{
        dispatch(Actions.setVolumeCrypto(ev.target.value))
        console.log(ev.target.value);
    },[dispatch]);

    return(
        <>
            <form>
                <label htmlFor="volume">Volume: </label>
                <input id="volume"
                       type="text"
                       onChange={onChangeEventHandler}
                       value={useSelector(volumeCryptoSelector)}
                />
                <br/>

                <div>
                    <label htmlFor="contactChoice1">UAH</label>
                    <input type="radio"
                           id="contactChoice1"
                           name="current"
                           value="uah"
                    />

                    <label htmlFor="contactChoice2">USD</label>
                    <input type="radio"
                           id="contactChoice2"
                           name="current"
                           value="usd"
                    />

                    <label htmlFor="contactChoice3">RUB</label>
                    <input type="radio"
                           id="contactChoice3"
                           name="current"
                           value="rub"
                    />

                </div>
                <br/>
                <span> Output calculate crypto</span>
            </form>
        </>
    );
}
export default CalcCrypto;