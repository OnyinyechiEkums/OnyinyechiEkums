import React from 'react';
import './App.css';

import Mail from './components/Mail';
import Text from './components/Text';
import Urllink from './components/Urllink';

import HelloWorld9 from './components/HelloWorld9';

const App: React.FC = () => {
  return (
    <div className="Container">

      <div className="Column1">
        <Mail/>
      </div>
      <div className="Column2">
        <Text/>
      </div>
      <div className="Column3">
        <Urllink/>
      </div>
    </div>
  );
}

export default App;