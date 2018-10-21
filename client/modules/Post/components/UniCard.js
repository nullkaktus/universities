import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

function UniCard(props) {
  const { classes } = props;
  const style = {
    display: 'inline-block',
    float:  'left',
  };

  return (
    <div >
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://images-na.ssl-images-amazon.com/images/I/71gI-IUNUkL._SY355_.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Link to={`/posts/${props.post.cuid}`} >
            {props.post.name}
          </Link>
          <Typography component="p">{props.post.country}, {props.post.city}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}


UniCard.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default withStyles(styles)(UniCard);
