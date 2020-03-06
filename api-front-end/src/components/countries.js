import React, { Component } from "react";
import { Route, Link } from "react-router-dom";


class Countries extends Component {
    render() {
      let countries = countryList.map(item => {
       
        return (
          <Link to={"/info/" + item.id}>
          <div className="countriesdiv" key={item.id} >
              <h3>Country Name: </h3>
              <p> Capital: </p>
    
          </div>
          </Link>
        );
      });
      return <div className='countryGrid'>{countries}</div>;
    }
  }
  
  
    export default Countries;