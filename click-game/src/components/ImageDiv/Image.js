import React from "react";
import "./style.css";



function Image(props) {
    return (
        <div className="img-div">
            <img src={props.image} alt="nfl-logo-images" key={props.key} />
        </div>

    )


}

export default Image;