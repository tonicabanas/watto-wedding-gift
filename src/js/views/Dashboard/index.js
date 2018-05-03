import React, { Component } from 'react';
import TShirt from 'components/TShirt';

import './style.scss';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Tiki: false,
      Taka: false,
      Machicambo: false,
      Licor: false,
      AguiHaz: false,
      MaxPower: false,
      Jorginho: false,
      Bohada: false,
      Uge: false,
      Todassss: false,
      Kike: false,
      Xavi: false,
    };
  }

  setStatusPlayer = (name, value) => {
    this.setState({ [name]: value });
  };

  allPlayersCorrect() {
    for (const player in this.state) {
      if (!this.state[player]) return false;
    }
    return true;
  }

  render() {
    return (
      <div className='Dashboard'>
        <div className='Dashboard-instructions'><h2>Enhorabuena Watto!!! </h2>En el siguiente enlace podrás encontrar la
          clave de tu caja fuerte.
          Presta atención ya que los número van apareciendo a lo largo de todo el vídeo, pueden estar escritos o ser
          dichos en audio. Disfrútalo!
          <div className='Dashboard-btnWrapper'>
            <a href='https://www.youtube.com/watch?v=izGwDsrQ1eQ' className='Dashboard-btn'>Ver el vídeo!</a>

          </div>
        </div>

      </div>
    );
    if (true || this.allPlayersCorrect()) {
    }
    return (
      <div className='Dashboard'>
        <TShirt name='Tiki' number={ 180 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Taka" number={ 405 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Machicambo" number={ 845 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Licor" number={ 9245 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="AguiHaz" number={ 980 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="MaxPower" number={ 245 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Jorginho" number={ 500 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Bohada" number={ 605 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Uge" number={ 80 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Todassss" number={ 2205 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Kike" number={ 2645 } setStatus={ this.setStatusPlayer }/>
        <TShirt name="Xavi" number={ 0 } setStatus={ this.setStatusPlayer }/>
      </div>
    );

  }
}

