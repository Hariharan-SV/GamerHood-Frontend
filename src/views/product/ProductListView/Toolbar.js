import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  ListItem,
  ListItemText,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import {getResults} from '../../../services/game';

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  }
}));

const Toolbar = ({ className, ...rest }) => {
  const classes = useStyles();
  const [name,setName] = React.useState("");
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [matchingGames,setMatchingGames] = React.useState([]);

  React.useEffect(()=>{
    async function onLoad() {
      let values = await getResults(name);
      let data = [];
      if(values['status'] === 1){
        data = values['data'];
      }
      setMatchingGames(data);
    }
    onLoad();

  },[matchingGames])

  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={600} style={{"backgroundColor":"#111"}}>
              <TextField
                value={name}
                onChange={handleNameChange}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        fontSize="small"
                        color="#FFF"
                      >
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search Game"
                variant="outlined"
                style={{backgroundColor:"#222"}}
              />
              {matchingGames.map((game,index)=>(
                <ListItem key={`Game ${index+1}`}>
                  <ListItemText>{game['url_info']['url_name']}</ListItemText>
                  <Typography variant="caption">{game['url_info']['type']}</Typography>
                </ListItem>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Toolbar.propTypes = {
  className: PropTypes.string
};

export default Toolbar;
