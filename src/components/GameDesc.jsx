import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from '@material-ui/core/Typography';

function StoreList(props) {
    return (
        <a href={props.data.url}>{props.data.store.name}</a>
    )
}

function GameDesc(props) {
    const [desc, setDesc] = useState({});

    useEffect(() => {
        axios.get(`https://api.rawg.io/api/games/${props.match.params.id}`)
        .then(res => {
            setDesc(res.data);
        })
        .catch(err => console.log(err));
    }, [])

    function createStoreList() {
        if(desc.stores){
            return desc.stores.map(store => {
                return (
                    <StoreList data={store} key={store.id} />
                )
            })
        }
    }

    return (
        <div className="game-desc">

            <h1>{desc.name}</h1>
            <div className="rating-text">
                Rating: {desc.rating}/5
            </div>

            <img src={desc.background_image} alt={desc.name} />

            <Typography variant="body1" color="initial" component="p" dangerouslySetInnerHTML={{__html: desc.description}}></Typography>

            <div className="visit-website">
                <h2>Visit website: </h2>
                <a href={desc.website}>{desc.website}</a>
            </div>
            <div className="store-list">
                <h2>Buy this game: </h2>
                { createStoreList() }
            </div>
        </div>
    )
}

export default GameDesc;