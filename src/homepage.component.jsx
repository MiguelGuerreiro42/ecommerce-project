import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1>Welcome to my Homepage</h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>BONÉS</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>JAQUETAS</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>TÊNIS</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>MULHERES</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>HOMENS</div>
          <span className='subtitle'>COMPRE AGORA</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
