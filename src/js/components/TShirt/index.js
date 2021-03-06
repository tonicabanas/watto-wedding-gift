import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class TShirt extends Component {
  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
    setStatus: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  getNumber() {
    return Math.sqrt(this.props.number / 5);
  }

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value,
    });
    this.props.setStatus(this.props.name, this.isCorrect(evt.target.value));
  }

  isCorrect(value) {
    const number = value || value === '' ? parseInt(value) : parseInt(this.state.inputValue);
    return this.getNumber() === number;
  }

  renderCorrect() {
    return (this.isCorrect() ? <div className='TShirt-palm'/> : null);
  }

  render() {
    return (
      <div className='TShirt'>
        <div className='TShirt-img'>
          <div className='TShirt-name'>{ this.props.name }</div>
          <div className='TShirt-number'><input value={ this.state.inputValue }
                                                onChange={ evt => { this.updateInputValue(evt); } }
                                                type='number no-spinners'/></div>
          { this.renderCorrect() }
        </div>
      </div>
    );
  }
}