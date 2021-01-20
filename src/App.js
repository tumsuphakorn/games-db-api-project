import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GamePage from "./components/GamePage.jsx";
import NavBar from "./components/NavBar.jsx";
import GameDesc from "./components/GameDesc.jsx";

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route path="/" exact component = { GamePage } />
        <Route path="/page/:page" render={(props) => <GamePage {...props} key={Date.now()} />} />
        <Route path="/game/:id" render={(props) => <GameDesc {...props} key={Date.now()} />} />
      </Router>
    </div>
  );
}

export default App;
