import './App.css';
import React from 'react';
import { SearchBar } from './components/SearchBar/SearchBar';
import { OneDayTable } from './components/Table/oneDayTable';
import { ForecastTable } from './components/Table/forecastTable';


function App() {
  return (
    <>
      <header className="row">
          <div className="col-12 text-center">
              <h1 className="text-uppercase">Easy Weather Dashboard 2.0</h1>
          </div>
      </header>
      <main className="row">
          <SearchBar/>
          <div className="col-8">
              {/* <h2 id="dash-title"></h2> */}
              <div className="row">
                  <div id="current" className="col-6">
                      
                  </div>
                  <div id="image" className="col-6">
                      
                  </div>
              </div>
              <div id="future" className="d-flex flex-row justify-space-around">
                  
              </div>
          </div>
      </main>
      
      <OneDayTable/>
      <ForecastTable/>
    </>
  );
}

export default App;
