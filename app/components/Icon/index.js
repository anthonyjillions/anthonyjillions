import React from 'react';
import FontAwesome from 'react-fontawesome';

export default function Icon(props) {
  return (
    <span style={{ cursor: 'pointer' }}>
      <FontAwesome name={props.name} size={props.size} />
    </span>
  );
}

Icon.propTypes = {
  name: React.PropTypes.string,
  size: React.PropTypes.string,
};
