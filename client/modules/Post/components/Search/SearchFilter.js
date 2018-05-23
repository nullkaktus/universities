import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class SearchFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick a country:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Switzerland</option>
            <option value="lime">Russia</option>
            <option value="coconut">USA</option>
          </select>
        </label>
        <Button variant="raised" color="primary" onClick={this.handleSubmit}>
          Search
        </Button>
      </form>
    );
  }
}

export default SearchFilter;
