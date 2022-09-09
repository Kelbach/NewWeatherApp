import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { OneDayTable } from './components/Table/oneDayTable';
import { ForecastTable } from './components/Table/forecastTable';


function App() {
  return (
    <>
      <SearchBar/>
      <OneDayTable/>
      <ForecastTable/>
    </>
  );
}

export default App;
