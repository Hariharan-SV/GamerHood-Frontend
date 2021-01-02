import React from 'react';
import {
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import { getUser } from 'src/services/user';
import MainCard from './MainCard';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = (props) => {
  const classes = useStyles();
  const [userData, setUserData] = React.useState({});
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
      title="Dashboard"
    >
      {Object.keys(userData).length === 0 ? <div />:<MainCard userData={userData}/>}
    </Page>
  );
};

export default Dashboard;
