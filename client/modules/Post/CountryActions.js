import callApi from '../../util/apiCaller';

export const ADD_COUNTRIES = 'ADD_COUNTRIES';

export function addCountries(countries) {
  return {
    type: ADD_COUNTRIES,
    countries,
  };
}

export function fetchCountries() {
    return (dispatch) => {
      return callApi('countries').then(res => {
        console.log("fetchCountries dispatch res: ");
        console.log(res);
        dispatch(addCountries(res.countries));
        //console.log("CountryActions: " + res.countries);
        //return res.countries;
      });
    };
}
