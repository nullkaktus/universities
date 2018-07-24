import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { searchUniByCountry } from '../../PostActions';

class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: '',
      clearable: true };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <div className="section">
        <h3 className="section-heading">Pick a country:</h3>
        <Select
          value={this.state.selectValue}
          onChange={this.handleChange}
          onSelectResetsInput={false}
          options={[
            { value: '', label: '' },
            { value: 'Switzerland', label: 'Switzerland' },
            { value: 'Russia', label: 'Russia' },
            { value: 'Andorra', label: 'Andorra' },
            { value: 'Albania', label: 'Albania' },
          ]}
          clearable={this.state.clearable}
        />
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Search
        </Button>
      </div>
    );
  }
}


SearchFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onSelectCountry: PropTypes.func,
};

export default connect(null)(SearchFilter);
