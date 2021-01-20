import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GameCard from "./GameCard.jsx";

function GamePage(props) {

//////////////////////// PAGE NAV FUNCTION ///////////////////////
    let page = props.match.params.page;
    let nextPageRoute = `/page/${Number(page)+1}`;
    let prevPageRoute = `/page/${Number(page)-1}`;

    if (!page || page < 1) {
        page = 1;
        prevPageRoute = "/page/1";
        nextPageRoute = "/page/2";
    }

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games?page=${page}`)
        .then(res => {
            setGames(res.data.results);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="games-page">
        <h1>Feel bored?</h1>
        <h1>Explore your new game!</h1>
        <div className="games-container">
            { games.map(game => <GameCard key={game.id} data={game} />) }
        </div>
        <div className="page-navigator">
            <Link className="link" onClick={() => page = Number(page)-1} to={page == 1 ? "/page/1" : prevPageRoute}>Previous Page</Link>
            <Link className="link" onClick={() => page = Number(page)+1} to={nextPageRoute}>Next Page</Link>
        </div>
        </div>
    );
}

export default GamePage;