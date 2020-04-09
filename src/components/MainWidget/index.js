//Core
import React, {useEffect}from "react";
import {useDispatch, useSelector } from "react-redux";
import * as selectors from "../../engine/core/crypto/selectors";
//Types
import * as asyncAction from "../../engine/core/crypto/saga/asyncActions";
//Components
import Widget from "../Widget";
import CalcCrypto from "../CalcCrypto";
//Style

function MainWidget() {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(asyncAction.getCryptoDataAsync())
        }, [dispatch]);

    const data =(useSelector(selectors.cryptowidgetSelector));




    return(data.map((item, index) =>
        <div key={index}>
            <Widget item = {item}  />
        </div>))

}

export default MainWidget;
