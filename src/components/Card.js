import React from "react";

function Card(props) {

  return (
      <div className="card visible" onClick={() => props.clicked(props.id)}>
        <div className="card-face">
          <img src="assets/imgs/twinkle.gif" alt="twinkle" className="twinkle" />
          <div className="overlay"></div>
          <img src="assets/imgs/movie-reel.png" alt="" className="reel" />
          <img className="movie-reel movie-reel-top-left" src="" alt="movie" />
          <img className="movie-reel movie-reel-top-right" src="" alt="movie" />
          <img className="movie-reel movie-reel-bottom-left" src="" alt="movie" />
          <img className="movie-reel movie-reel-bottom-right" src="" alt="movie" />
          <img className="character" src={"assets/imgs/" + props.characterImage} alt="character" />
          <div id="character-name" key={props.id}>{props.characterName}</div>
        </div>
      </div>
  );
}
