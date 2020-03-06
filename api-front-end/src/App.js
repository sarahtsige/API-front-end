import React from 'react';
import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import './App.css';
import Countries from "./components/countries"


function App() {
  return (
    <div className="App">
      <nav>
          <Link to="/"> 
          <h1>NCountry List</h1>
          </Link>
      </nav>
      <main>

        <Countries />

        <footer>
          <h3>US COuntry Data</h3>
          <img src="" alt=""></img>
        </footer>
        </main>
    </div>
  );
}

export default App;
