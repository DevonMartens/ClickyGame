import React from "react";
import "../App.css"

function Card(props) {

  return (
      <div className="card visible" onClick={() => props.clicked(props.id)}>
       
          <div className="overlay"></div>
          
          <img className="character" src={"assets/images/" + props.characterImage} alt="character" />
          <div id="character-name" key={props.id}>{props.characterName}</div>
        {/* </div> */}
      </div>
  );
}

export default Card;