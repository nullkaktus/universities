import React, { PropTypes } from 'react';

// Import Components
import UniCard from './UniCard';

function UniList(props) {
  return (
    <div className="listView">
      {
        props.posts.map(post => (
          <UniCard
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

UniList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default UniList;
