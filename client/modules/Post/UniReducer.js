import { ADD_POST, ADD_POSTS, DELETE_POST } from './UniActions';

// Initial State
const initialState = { data: [] };

const UniReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST :
      return {
        data: [action.post, ...state.data],
      };

    case ADD_POSTS :
      return {
        data: action.posts,
      };

    case DELETE_POST :
      return {
        data: state.data.filter(post => post.cuid !== action.cuid),
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getPosts = state => state.posts.data;

//Get all countries
//TODO posts or options?
//export const getCountries = state => state.countries;

// Get post by cuid
export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Get post by country
export const getPostCountry = (state, country) => state.posts.data.filter(post => post.country === country);

// Export Reducer
export default UniReducer;
