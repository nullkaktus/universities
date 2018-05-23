import React, { Component } from 'react';
import Suggestions from '../../components/Search';

class SearchFilter extends Component {

  state = {
    query: '',
    results: [],
  }

  getInfo = () => {
    this.setState({
      results: []
    });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    });
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    );
  }
}

export default SearchFilter;
