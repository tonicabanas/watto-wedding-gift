import React from 'react';
import TShirt from 'components/TShirt';

import './style.scss';

const Dashboard = () => (
  <div className='Dashboard'>
    <TShirt name={ 'Tiki' } number={ 180 }/>
    <TShirt name={ 'Taka' } number={ 405 }/>
    <TShirt name={ 'Machicambo' } number={ 845 }/>
    <TShirt name={ 'Licor' } number={ 9245 }/>
    <TShirt name={ 'Agui.Haz' } number={ 980 }/>
    <TShirt name={ 'Max Power' } number={ 245 }/>
    <TShirt name={ 'Jorginho' } number={ 500 }/>
    <TShirt name={ 'Bohada' } number={ 605 }/>
    <TShirt name={ 'Uge' } number={ 80 }/>
    <TShirt name={ 'Todassss' } number={ 2205 }/>
    <TShirt name={ 'Kike' } number={ 2645 }/>
    <TShirt name={ 'Xavi' } number={ 0 }/>
  </div>
);

export default Dashboard;
