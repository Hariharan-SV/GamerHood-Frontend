import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import Profile from './Profile';
import ProfileDetails from './ProfileDetails';
import { getUser } from 'src/services/user';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Account = () => {
  const classes = useStyles();
  const [userData,setUserData] = React.useState({});
  React.useEffect(()=>{
    async function onLoad() {
      let values = await getUser();
      if( values['status'] === 1 ) {
        setUserData(values['userDetails'])
      }
    }
    onLoad();
  },[]);

  return (
    <Page
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            {Object.keys(userData).length?<Profile userData={userData}/>:<div/>}
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            {Object.keys(userData).length?<ProfileDetails userData={userData} />:<div/>}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
