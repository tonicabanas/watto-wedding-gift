import React, { Component } from 'react';

import './style.scss';

export default class TShirt extends Component {
  render() {
    return (
      <div className='TShirt'>
        <div className='TShirt-img'>
          <div className='TShirt-name'>{ this.props.name }</div>
          <div className='TShirt-number'><input type='number no-spinners'/></div>
        </div>
      </div>
    );
  }
}