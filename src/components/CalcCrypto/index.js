//Core
import React from "react";

function CalcCrypto() {
    return(
        <>
            <form>
                <input type="text"/>
                <br/>
                <div>
                <input type="radio" id="contactChoice1"
                       name="contact" value="email"/>
                    <label htmlFor="contactChoice1">Email</label>

                    <input type="radio" id="contactChoice2"
                           name="contact" value="phone"/>
                        <label htmlFor="contactChoice2">Phone</label>

                        <input type="radio" id="contactChoice3"
                               name="contact" value="mail"/>
                            <label htmlFor="contactChoice3">Mail</label>
                </div>
                <br/>
                <span> Output calculate crypto</span>
            </form>
        </>
    );
}
export default CalcCrypto;