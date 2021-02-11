import React from 'react';
import './App.scss';
import Forecast from './components/Forecast/forecast';

const App = () => {
   let d = new Date();
   let n = d.getHours();         
  return (
    <div className={`weather-app ${n > 19 || n < 6 ? 'night': 'day'}`}>
      <header className={'weather-header'}>
        <h1>Weather App</h1>
        <h3>powered by React</h3>
      </header>
      <main>
        <Forecast />
      </main>
    </div>
  );
}

export default App;
