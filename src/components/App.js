import React, { Component } from 'react';
import kebabCase from 'lodash/kebabCase';
import Header from './Header';
import Nav from './Nav';
import NavLink from './NavLink';
import Section from './Section';
import sections from '../sections';

import './App.css';

class App extends Component {

  handleClick = (id) => (event) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Nav>
          {sections.map(s =>
            <NavLink
              key={s}
              href={`#${kebabCase(s)}`}
              onClick={this.handleClick(kebabCase(s))}
            >
              {s}
            </NavLink>
          )}
        </Nav>
        <div>
          {sections.map(s =>
            <Section key={s} id={kebabCase(s)}>
              <h1>{s}</h1>
            </Section>
          )}
        </div>
      </div>
    );
  }
}

export default App;
