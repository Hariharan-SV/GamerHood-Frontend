import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const LatestSearches = (props) => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const getSearchedTime = (dateTime) => {
    var now  = moment(new Date());
    var then = moment(dateTime, "YYYY-MM-DD HH:mm:ss");
    var timeDifferenceInMinutes = now.diff(then, 'minutes');
    return timeDifferenceInMinutes;
  }


  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subheader={`${data.length} in total`}
        title="Latest Searches"
      />
      <Divider />
      <List>
        {data.map((game, i) => (
          <ListItem
            divider={i < data.length - 1}
            key={game.id}
          >
            <ListItemAvatar>
              <img
                alt="game"
                className={classes.image}
                src={game.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={game.name}
              secondary={getSearchedTime(game.updatedAt)<60?`Searched ${getSearchedTime(game.updatedAt)} minutes ago`:`Searched ${getSearchedTime(game.updatedAt)/60} hours ago`}
            />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Card>
  );
};

LatestSearches.propTypes = {
  className: PropTypes.string
};

export default LatestSearches;
