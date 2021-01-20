import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      maxHeight: 500,
      margin: "2vh 1vw",
      paddingBottom: "1vh"
    },
    media: {
      height: 200,
    },
});

function GameCard(props) {
    const classes = useStyles();

    let descPath = `/game/${props.data.id}`;

    return (
      <div className="game-card">
        <Card className={classes.root}>
          <Link className="link" to={descPath}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.data.background_image} alt={props.data.name}
                title={props.data.name}
              />
              <CardContent>
                  <h2>{props.data.name}</h2>
              </CardContent>
            </CardActionArea>
          </Link>
          <CardActions>
            <Typography variant="button" component="h6" display="block" gutterBottom>
              Rating {props.data.rating}/5
            </Typography>
            <Rating name="half-rating-read" defaultValue={props.data.rating} precision={0.1} readOnly />
            <Link className="link" to={descPath}>
              <Button size="small" color="primary">
              <InfoIcon />More info
              </Button>
            </Link>
          </CardActions>
        </Card>
      </div>
  );
}

export default GameCard;