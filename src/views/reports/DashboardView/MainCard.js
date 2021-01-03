import React from 'react';
import {
  Container,
  Grid,
} from '@material-ui/core';
import Graphics from './Graphics';
import LatestSearches from './LatestSearches';
import Memory from './Memory';
import Processor from './Processor';
import OS from './OS';

const MainCard = (props) => {
  const {userData} = props;
  return(
    <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Graphics value={userData["system"]?userData["system"]["graphics"]:"N/A"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Processor value={userData["system"]?userData["system"]["processor"]:"N/A"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Memory value={userData["system"]?userData["system"]["memory"]:"N/A"}/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <OS value={userData["system"]?userData["system"]["os"]:"N/A"}/>
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestSearches data={userData["searches"]?userData["searches"]:[]}/>
          </Grid>
        </Grid>
      </Container>
  );
}

export default MainCard;
