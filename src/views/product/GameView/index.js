import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core';
import Page from 'src/components/Page';
import {useParams} from "react-router-dom";
import {getGame} from '../../../services/game';
import TopCard from './TopCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  text: {
    color: '#FFF'
  },
}));

const Product = () => {
  const classes = useStyles();
  const {id} = useParams();
  const [gameData, setGameData] = useState({});
  
  React.useEffect(()=>{
    async function onLoad() {
      let values = await getGame(id);
      if(values['status'] === 1 && values['data']!=null) {
        setGameData(values['data']);
      } else {
        window.location.replace("/404");
      }
    }

    onLoad();
    
  },[id]);
  console.log(gameData);

  return (
    <Page
      className={classes.root}
      title={gameData["name"]?gameData["name"]:"Game"}
    >
      {Object.keys(gameData).length === 0 ?<div/>:<TopCard gameData={gameData} classes={classes} />}
    </Page>
  );
};

export default Product;
