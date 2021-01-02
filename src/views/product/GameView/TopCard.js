import React from 'react';
import {Card, CardContent, Grid, Typography, Chip} from '@material-ui/core';

const TopCard = (props) => {
  const {classes, gameData} = props;
  return(
    <Grid container direction="row" align="center" style={{"justifyContent":"center"}}>
      <Grid item container xs={11} spacing={2} style={{"backgroundColor":"#0f0f0f"}}>
        <Card style={{"width":"100%"}}>
          <CardContent align="left">
            <img src={gameData["img_url"]} alt={`img - ${gameData["name"]}`} width="100%"/>
            <Typography variant="h2" className={classes.text}>{gameData["name"]}</Typography>
            <Typography variant="h5" className={classes.text}>{`Published by ${gameData["developer"]?gameData["developer"]:''}`}</Typography>
            <br />
            <br />
            <Typography variant="h3" className={classes.text}>Categories</Typography>
            <br />
            {
              gameData["categories"].map((game, index)=>(
                <Chip key={`Category ${index}`} variant="outlined" color="primary" size="medium" label={game} style={{"margin":"8px"}}/>
              ))
            }
          </CardContent>
        </Card>
      </Grid>
      <br />
      <br />
      <Grid item container xs={11} spacing={2} style={{"backgroundColor":"#0f0f0f","marginTop":"16px"}}>
        <Card>
          <CardContent align="left">
            <Typography variant="h3" className={classes.text}>About the Game</Typography>
            <br />
            <Typography variant="h5" className={classes.text} style={{"marginLeft":"8px"}}>{gameData["full_desc"]?gameData["full_desc"]["desc"]:""}</Typography>
            <br />
            <br />
            <Typography variant="h3" className={classes.text}>Popularly known for</Typography>
            <br />
            {
              gameData["popu_tags"].map((game, index)=>(
                <Chip key={`Popularity-${index}`} variant="outlined" color="primary" size="medium" label={game} style={{"margin":"8px"}}/>
              ))
            }

          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default TopCard;