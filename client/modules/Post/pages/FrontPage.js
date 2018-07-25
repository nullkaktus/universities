import React, { PropTypes, Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import UniCard from '../components/UniCard';


const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function FrontPage(props) {
  const { classes } = props;
  return (
    <div>
      <UniCard />
    </div>
  );
}


FrontPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FrontPage);
