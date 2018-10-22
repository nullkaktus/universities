import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Select from 'react-select';
// first build with commented out css file. TODO: configure to fix initial built
// import 'react-select/dist/react-select.css';

import styles from './Search.css';

import { fetchCountries, searchUniByCountry } from '../../UniActions';
import { getCountries, getPostCountry } from '../../UniReducer';

class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: '',
      clearable: true,
    };

    //TODO posts or options or countries?
    this.options = this.props.countries;
    console.log("Countries: ");
    console.log(this.options);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(fetchCountries());
  }


  handleChange= (selectValue) => {
// Attention: checking for null because of "clearable" option
    const value = selectValue === null ? '' : selectValue.value;
    this.setState({ selectValue: value });
    // selectedOption can be null when the `x` (close) button is clicked
    if (value) {
      console.log(`Selected: ${value}`);
    }
    console.log(value);
    this.props.onSelectCountry(value);
  }

  handleSubmit() {
    console.log('handle Submit ' + this.state.selectValue.value);
    // this.props.dispatch(searchUniByCountry(this.state.selectValue.value));
    // console.log(this.state.selectValue);
    event.preventDefault();
    this.props.onSelectCountry(this.state.selectValue.value);
    // this.props.dispatch(toggleAddPost());
    // this.props.dispatch(searchUniByCountry({ country }));
  }

  render() {
    return (
      <div className={styles['section']}>
        <h3 className={styles['section-title']}>Pick a country:</h3>
        <Select
          value={this.state.selectValue}
          onChange={this.handleChange}
          onSelectResetsInput={false}
          options={this.options}
          clearable={this.state.clearable}
        />
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}

// Actions required to provide data for this component to render in sever side.
SearchFilter.need = [() => { return fetchCountries(); }];

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    countries: getCountries(state),
  };
}


SearchFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSelectCountry: PropTypes.func,
  countries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default connect(mapStateToProps)(SearchFilter);
