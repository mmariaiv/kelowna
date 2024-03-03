import React from "react";
import {HashLink} from "react-router-hash-link";
function UpButton() {
    function handleButtonClick () {

    }
    return (
        <HashLink className="up-btn" to={"#"} smooth></HashLink>
    )
}

export default UpButton;