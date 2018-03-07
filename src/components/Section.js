import React from 'react';
import classNames from 'classnames';

import './Section.css';

function Section(props) {
  const { className } = props;
  const classes = classNames('section', className);
  return (
    <section {...props} className={classes} />
  );
}

export default Section;
