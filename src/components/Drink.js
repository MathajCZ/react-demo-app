import React from "react";


function Drink({image, name, skillLevel}){
    return (
        <div className="drink">
            <div style={{backgroundImage: `url(${image})` }}> </div>
            <h2> {name} </h2>
            <p> Skill level: {skillLevel} </p>

        </div>
    );
}

export default Drink;