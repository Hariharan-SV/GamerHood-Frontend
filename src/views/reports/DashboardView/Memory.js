import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Typography,
  makeStyles,
  colors
} from '@material-ui/core';
import MemoryIcon from '@material-ui/icons/Memory';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.orange[600],
    height: 56,
    width: 56
  }
}));

const Memory = (props) => {
  const classes = useStyles();
  const { value, className, ...rest } = props;
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              Memory
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              {value}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <MemoryIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Memory.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

export default Memory;
