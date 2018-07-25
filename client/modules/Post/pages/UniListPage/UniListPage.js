import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UniList from '../../components/UniList';
import UniCreateWidget from '../../components/UniCreateWidget/UniCreateWidget';
import SearchFilter from '../../components/Search/SearchFilter';

// Import Actions
import { addPostRequest, fetchPosts, deletePostRequest } from '../../UniActions';
import { toggleAddPost } from '../../../App/AppActions';

// Import Selectors
import { getShowAddPost } from '../../../App/AppReducer';
import { getPosts, getPostCountry } from '../../UniReducer';
// !! imported selector from PostReducer here. Probably can use it to select universities by country. Not yet implemented.

class UniListPage extends Component {
  constructor(props) {
    super(props);
    this.state = { country: '' };
    this.list = this.props.posts;
  }

  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  handleDeletePost = post => {
    if (confirm('Do you want to delete this post')) { // eslint-disable-line
      this.props.dispatch(deletePostRequest(post));
    }
  };


  handleAddPost = (name, title, content) => {
    this.props.dispatch(toggleAddPost());
    this.props.dispatch(addPostRequest({ name, title, content }));
  };

  handleCountry = (countryValue) => {
    console.log('UniListPage ' + countryValue);
    this.setState({ country: countryValue });
    this.list = this.props.posts;
    if (countryValue !== '') {
      this.list = this.props.posts.filter(p => p.country === countryValue);
    }
  }

  render() {
    return (
      <div>
        <UniCreateWidget addPost={this.handleAddPost} showAddPost={this.props.showAddPost} />
        <SearchFilter onSelectCountry={this.handleCountry} />
        <UniList handleDeletePost={this.handleDeletePost} posts={this.list} />
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
UniListPage.need = [() => { return fetchPosts(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    showAddPost: getShowAddPost(state),
    posts: getPosts(state),
  };
}

UniListPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
  showAddPost: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

UniListPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UniListPage);
