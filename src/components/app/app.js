import React from 'react';
import WeaherPage from './../pages/weather-page';
import ViewForm from './../form/form';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <WeaherPage />
      <ViewForm />
    </div>
  );
}

export default App;
