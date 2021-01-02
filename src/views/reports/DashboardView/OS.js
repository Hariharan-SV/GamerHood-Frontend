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
import LaptopIcon from '@material-ui/icons/Laptop';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.indigo[600],
    height: 56,
    width: 56
  }
}));

const OS = (props) => {
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
              Operating System
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
              <LaptopIcon />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

OS.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string
};

export default OS;
