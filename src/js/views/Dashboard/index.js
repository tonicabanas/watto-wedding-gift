import React from 'react';
import TShirt from 'components/TShirt';

import './style.scss';

const Dashboard = () => (
  <div className='Dashboard'>
    <TShirt name={'Tiki'}/>
    <TShirt name={'Taka'}/>
    <TShirt name={'Machicambo'}/>
    <TShirt name={'Licor'}/>
    <TShirt name={'Agui.Haz'}/>
    <TShirt name={'Max Power'}/>
    <TShirt name={'Jorginho'}/>
    <TShirt name={'Bohada'}/>
  </div>
);

export default Dashboard;
