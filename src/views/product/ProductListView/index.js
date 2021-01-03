import React from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import ProductCard from './ProductCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const ProductList = () => {
  const classes = useStyles();
  const mostLikedGames = [
    { "developer":"Innersloth",
      "description": "Play with 4-10 player online or via local WiFi as you attempt to prepare your spaceship for departure...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/945360/header.jpg?t=1598556351",
      "name":"Among Us",
      "id":"945360"
    },
    {
      "developer": "Rockstar North",
      "description": "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/271590/header.jpg?t=1592866696",
      "name":"Grand Theft Auto V",
      "id":"271590"
    },
    {
      "developer": "CD PROJEKT RED",
      "description": "Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/1091500/header.jpg?t=1602864465",
      "name":"Cyberpunk 2077",
      "id":"1091500"
    },
    {
      "developer": "Valve, Hidden Path Entertainment",
      "description": "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg?t=1592263625",
      "name":"Counter-Strike: Global Offensive",
      "id":"730"
    },
    {
      "developer": "Mediatonic",
      "description": "Fall Guys: Ultimate Knockout flings hordes of contestants together online in a mad dash through round after round...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/1097150/header_alt_assets_0.jpg?t=1602172542",
      "name":"Fall Guys: Ultimate Knockout",
      "id":"1097150"
    },
    {
      "developer": "Rockstar Games",
      "description": "1899.Arthur Morgan and the Van der Linde gang are outlaws on the run. With federal agents and the best bounty hunters...",
      "img_url":"https://steamcdn-a.akamaihd.net/steam/apps/1174180/header.jpg?t=1597419522",
      "name": "Red Dead Redemption 2",
      "id": "1174180"
    }
  ];
  React.useEffect(()=>{
    
  })
  return (
    <Page
      className={classes.root}
      title="Explore"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid container spacing={2}>
            <Typography variant="h2" style={{"color":"#FFF","marginLeft":"3%"}}>Most Liked Games</Typography>
            <br />
          </Grid>
          <br />
          <br />
          <Grid container direction="row" spacing={3}>
            {
              mostLikedGames.map((game)=>(
                <Grid item key={game.id} xs={12} md={6} lg={4}>
                  <ProductCard product={game} />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>      
    </Page>
  );
};

export default ProductList;
