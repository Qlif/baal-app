//Core
import React, {useEffect}from "react";
import {useDispatch, useSelector } from "react-redux";
import * as selectors from "../../engine/core/crypto/selectors";
//Types
import * as asyncAction from "../../engine/core/crypto/saga/asyncActions";
//Components
import Widget from "../Widget";

//Style

function MainWidget() {
    const dispatch = useDispatch();

    useEffect(() => {
            dispatch(asyncAction.getCryptoDataAsync())
        }, [dispatch]);

    const data =(useSelector(selectors.cryptowidgetSelector));
    console.log(data);

    return<>
        {Object.keys(data).map((currency, index) => (
            <div key={index}>
                <Widget  {...data[currency]} />
            </div>))}
            </>

}

export default MainWidget;
