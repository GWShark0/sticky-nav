import React, { Component } from 'react';
import classNames from 'classnames';

import './Nav.css';

function posY(element) {
  return element.getBoundingClientRect().y;
}

class Nav extends Component {

  state = {
    stuck: false
  }

  componentDidMount() {
    const update = this.handleScroll(this.refs.nav);
    window.addEventListener('scroll', () => requestAnimationFrame(update));
  }

  handleScroll = (element) => () => {
    const y = posY(element);

    if (y > 0 && this.state.stuck) {
      this.setState({ stuck: false });
    }

    if (y < 0 && !this.state.stuck) {
      this.setState({ stuck: true });
    }
  }

  render() {
    const classes = classNames(
      'nav',
      { 'nav--stuck': this.state.stuck },
    );

    return (
      <nav className={classes} ref="nav">
        <div className="nav__content">
          {this.props.children}
        </div>
      </nav>
    );
  }
}

export default Nav;
