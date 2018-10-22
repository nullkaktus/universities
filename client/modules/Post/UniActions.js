import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_POST = 'ADD_POST';
export const ADD_POSTS = 'ADD_POSTS';
export const DELETE_POST = 'DELETE_POST';
export const ADD_COUNTRIES = 'ADD_COUNTRIES';

// Export Actions
export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

/*
export function addPostRequest(post) {
  return (dispatch) => {
    return callApi('posts', 'post', {
      post: {
        name: post.name,
        title: post.title,
        content: post.content,
      },
    }).then(res => dispatch(addPost(res.post)));
  };
}
*/

export function addPosts(posts) {
  return {
    type: ADD_POSTS,
    posts,
  };
}

export function addCountries(posts) {
  return {
    type: ADD_COUNTRIES,
    posts,
  };
}

export function fetchPosts() {
  return (dispatch) => {
    return callApi('posts').then(res => {
      dispatch(addPosts(res.posts));
    });
  };
}

export function fetchCountries() {
  return (dispatch) => {
    return callApi('countries').then(res => {
      dispatch(addCountries(res.countries));
      console.log("UniActions: " + res.countries);
    });
  };
}


export function fetchPost(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`).then(res => dispatch(addPost(res.post)));
  };
}

/*
export function deletePost(cuid) {
  return {
    type: DELETE_POST,
    cuid,
  };
}
*/

export function searchUniByCountry(country) {
  console.log('PostActions ' + country);
  return (dispatch) => {
    return callApi(`posts/${country}`).then(res => dispatch(searchUniByCountry(res.post)));
  };
}

/*
export function deletePostRequest(cuid) {
  return (dispatch) => {
    return callApi(`posts/${cuid}`, 'delete').then(() => dispatch(deletePost(cuid)));
  };
}

*/
