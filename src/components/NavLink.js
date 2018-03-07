import React from 'react';
import classNames from 'classnames';

import './NavLink.css';

function NavLink(props) {
  const { className, ...rest } = props;
  const classes = classNames('nav-link', className);
  return (
    <a {...props} className={classes} />
  )
}

export default NavLink;
