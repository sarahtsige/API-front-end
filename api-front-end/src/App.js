import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/countries";

function App() {
  return (
    <div className="App">
      <nav>
        <h1>Countries</h1>
      </nav>
      <main>
        
          <Countries />
      
        <footer>
       <h3>Country Data</h3>
        </footer>
      </main>
    </div>
  );
}

export default App;
