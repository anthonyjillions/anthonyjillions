import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Icon(props) {
  return (
    <span style={{ cursor: 'pointer' }}>
      <FontAwesome name={props.name} />
    </span>
  );
}

Icon.propTypes = {
  name: React.PropTypes.string,
};
