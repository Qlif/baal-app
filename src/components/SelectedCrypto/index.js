//Core
import React from "react";
import {useSelector} from "react-redux";
//Selector
import {currentCryptoSelector} from "../../engine/core/crypto/selectors";

function SelectedCrypto() {
    return(
        <div>
            <span>Selected coin: {useSelector(currentCryptoSelector).toUpperCase()}</span>
        </div>
    )
}
export default SelectedCrypto;