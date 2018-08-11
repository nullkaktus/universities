import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import UniMap from '../../pages/UniDetailPage/UniMap';
import UniGridImages from '../../pages/UniDetailPage/UniGridImages';

// Import Style
import styles from '../../components/UniListItem/UniListItem.css';

// Import Actions
import { fetchPost } from '../../UniActions';

// Import Selectors
import { getPost } from '../../UniReducer';

export function UniDetailPage(props) {
  return (
    <div>
      <Helmet title={props.post.name} />
      <div className={`${styles['single-post']} ${styles['post-detail']}`}>
        <h3 className={styles['post-title']}>{props.post.name}</h3>
        <UniGridImages images={props.post} />
        <img src={props.post.img} alt="" className={styles['university-image']} />
        <p className={styles['author-name']}> {props.post.country}</p>
        <p className={styles['post-desc']}>{props.post.city}</p>
        <UniMap
          googleMapURL={`http://maps.google.com/maps/api/js?sensor=false`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px`, width: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in server side.
UniDetailPage.need = [params => {
  return fetchPost(params.cuid);
}];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    post: getPost(state, props.params.cuid),
  };
}

UniDetailPage.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(UniDetailPage);
