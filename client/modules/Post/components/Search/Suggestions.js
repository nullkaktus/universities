import React, { PropTypes } from 'react';

const Suggestions = (props) => {
  const options = props.results.map(r => (
    <li key={r.id}>
      {r.name}
    </li>
  ));
  return <ul>{options}</ul>;
};

Suggestions.propTypes = {
  results: PropTypes.array.isRequired,
};

export default Suggestions;
