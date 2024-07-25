import React from 'react';
import PropTypes from 'prop-types';

const Bubble = ({ href, icon: Icon }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="bubble">
      <Icon className="bubble-icon" />
    </a>
  );
};

Bubble.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired
};

export default Bubble;
