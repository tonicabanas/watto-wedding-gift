import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { routeCodes } from 'constants/routes';
import WebpackLogo from 'assets/img/webpack.inline.svg';

import './style.scss';

export default class Menu extends Component {
  render() {
    return (
      <div className='Menu'>
        <div className='Menu-logo'>
          <a href='https://mrmilu.com' target='_blank' rel='noreferrer noopener' aria-label='Mr Milu website'>
            <WebpackLogo />
          </a>
        </div>
        <div className='Menu-links'>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            exact
            to={routeCodes.DASHBOARD}
          >
            Home
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={routeCodes.ABOUT}
          >
            About
          </NavLink>
          <NavLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/404'
          >
            404
          </NavLink>
        </div>
      </div>
    );
  }
}