import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import Countries from "./components/countries";
import Head from "./components/nav"
import CountryInfo from "./components/countryinfo"

// function App() {





    // render() {
    //   return (
    //     <div>
    //       <nav>
    //       // the link component produces an a element
    //         <Link to=""></Link>
    //         <Link to=""></Link>
    //       </nav>
    //       <main>
    //         // routes render the specified component we pass in
    //         <Route path="" render={}/>
    //         // we can give either a render or a component prop.
    //         <Route path="" component={}/>
    //       </main>
    //     </div>
    //   )
    // }
    // <div className="App">
    //   <nav>
    //     <h1>Countries</h1>
    //   </nav>
    //   <main>
        
    //       <Countries />
      
    //     <footer>
    //    <h3>Country Data</h3>
    //     </footer>
    //   </main>
    // </div>
// };

// export default App;


// import React, { Component } from 'react';

class App extends Component {
  render() {
    return(
      <div>
        <nav>
          {/* <Link to="/">
            <img src="https://en.bitcoin.it/w/images/en/2/29/BC_Logo_.png" alt=""/>
            <h1>Countries</h1>
    </Link>*/}
    <Head />
      </nav>
        <main>

        <Countries />

        </main>
      </div>
    )
  }
}

export default App;