import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UniList from '../../components/UniList';

// Import Actions
import { addPostRequest, fetchPosts } from '../../UniActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { searchUniByCountry } from '../../UniReducer';

class UniListPage extends Component {

  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  render() {
    return (
      <div>
        <UniList posts={this.props.posts} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UniListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    posts: searchUniByCountry(state, props.params.country),
  };
}

UniListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

UniListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UniListPage);
