//Core
import React from "react";

function CalcCrypto() {
    return(
        <>
            <form>
                <input type="text"/>
                <br/>
                <div>
                    <input type="radio"
                           id="contactChoice1"
                           name="current"
                           value="uah"
                    />
                    <label htmlFor="contactChoice1">UAH</label>

                    <input type="radio"
                           id="contactChoice2"
                           name="current"
                           value="usd"
                    />
                    <label htmlFor="contactChoice2">USD</label>

                    <input type="radio"
                           id="contactChoice3"
                           name="current"
                           value="rub"
                    />
                    <label htmlFor="contactChoice3">RUB</label>
                </div>
                <br/>
                <span> Output calculate crypto</span>
            </form>
        </>
    );
}
export default CalcCrypto;