import React, { Component } from "react";
import { Route, Link } from "react-router-dom";


// import axios from "axios";
import "./countries";


let countryUrl = "http://localhost:4000/name/";
let countryUrl2 = "https://api-projectssaleh.herokuapp.com/name/";



class CountryInfo extends Component {
  componentDidMount() {
    const country= this.props.name;
    const url = `${countryUrl}${country}.json`
    console.log(url)
    console.log(country)

    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.error(err)
      })
  }

  render() {
    return (
      <div>
        <h1>Bitcoin price in {this.props.name}</h1>
        <p>{this.props.capital}</p>
      </div>
    );
  }return
} 

export default CountryInfo;
