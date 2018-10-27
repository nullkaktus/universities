import { ADD_COUNTRIES } from './CountryActions';

// Initial State
const initialState = { data: [] };

const CountryReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COUNTRIES :
        console.log("CountryReducer: " + action);
        return {
          data: action.countries,
        };
    default:
        return state;
    }
};

//Get all countries
//TODO posts or options?
export const getCountries = state => state.countr.data;

// Export Reducer
export default CountryReducer;
