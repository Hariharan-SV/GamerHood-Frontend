import React from 'react';
import {
  Container,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';

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
  React.useEffect(()=>{
    
  })
  return (
    <Page
      className={classes.root}
      title="Explore"
    >
      <Container maxWidth={false}>
        <Toolbar />
      </Container>
    </Page>
  );
};

export default ProductList;
