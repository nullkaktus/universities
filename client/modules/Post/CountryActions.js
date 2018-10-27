import callApi from '../../util/apiCaller';

export const ADD_COUNTRIES = 'ADD_COUNTRIES';

export function addCountries(countries) {
  return {
    type: ADD_COUNTRIES,
    countries,
  };
}

export function fetchCountriesForDropdown() {
    return (dispatch) => {
      return callApi('countries').then(res => {
        var data = [];
        for (var i in res.countries) {    

          var item = res.countries[i];   
      
          data.push({ 
              "value" : item,
              "label"  : item,
          });
      }
        dispatch(addCountries(data));
        //console.log("CountryActions: " + res.countries);
        //return res.countries;
      });
    };
}
