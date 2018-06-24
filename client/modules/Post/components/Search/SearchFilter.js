import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { searchUniByCountry } from '../../PostActions';

class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { selectValue: 'Russia' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange= (selectValue) => {
    this.setState({ selectValue });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectValue) {
      console.log(`Selected: ${selectValue.label}`);
    }
  }

  handleSubmit() {
    console.log('handle Submit');
    this.props.dispatch(searchUniByCountry(this.state.selectValue.value));
    console.log(this.state.selectValue);
    event.preventDefault();
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
            { value: 'Switzerland', label: 'Switzerland' },
            { value: 'Russia', label: 'Russia' },
            { value: 'Andorra', label: 'Andorra' },
          ]}
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
};

export default connect(null)(SearchFilter);
