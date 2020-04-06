//Core
import React, {useEffect}from "react";
import {useDispatch, useSelector } from "react-redux";
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

    return(
        <div>
            <Widget />
            <CalcCrypto />
        </div>
    );
}

export default MainWidget;
