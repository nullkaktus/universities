import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import { searchUniByCountry } from '../../PostActions';

class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'Russia' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit = (country) => {
    this.props.dispatch(searchUniByCountry(this.state.value));
    alert(country);
    event.preventDefault();
    // this.props.dispatch(toggleAddPost());
    // this.props.dispatch(searchUniByCountry({ country }));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick a country:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Switzerland">Switzerland</option>
            <option value="Russia">Russia</option>
            <option value="USA">USA</option>
          </select>
        </label>
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Search
        </Button>
      </form>
    );
  }
}


SearchFilter.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(SearchFilter);
