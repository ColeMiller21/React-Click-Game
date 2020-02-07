import React from "react";
import "./style.css";



function Image(props) {
    return (
        <div className="img-div">
            <img id="team-image" src={props.image} alt="nfl-logo-images" key={props.key} onClick={props.onClick} />
        </div>

    )


}

export default Image;