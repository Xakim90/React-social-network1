import loader from "../../../assets/images/loader.gif";
import React from "react";

let Preloader = (props) => {
    return <div>
        <img src={loader} style={{width: 100, height: 100}}/>
    </div>
}

export default Preloader
