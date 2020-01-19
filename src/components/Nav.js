import React from "react";

function Nav(props) {
  return (

    <nav className="nav">
      <div className="game-name">
        Clicky Game
        </div>
      <div className="directions">
        Start 
          <span className="subDirections"> Click An Image to Start the game</span>
      </div>
      <div className="game-info-container game-info">
        Score <span id="score">0</span> &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;
                Top Score <span id="top-score">0</span>
      </div>
    </nav>

  );
}

export default Nav;