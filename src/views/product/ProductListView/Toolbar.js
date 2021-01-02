import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
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
  
  function useFetch() {
    const [data, setData] = React.useState([]);
  
    React.useEffect(() => {
      async function fetchUrl() {
        if(name === ""){
          setData([]);
          return;
        }
        let values =  await getResults(name);
        if(values['status'] === 1){
          values = values['data'];
          setData(values);
        }
      }
      fetchUrl();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name]);
    return data;
  }

  const matchingGames = useFetch();

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
                <ListItem onClick={()=>window.location.replace('/game/details/'+game['url_info']['id'])} key={`Game ${index+1}`}>
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
