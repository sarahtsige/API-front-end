import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Route, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

// import axios from "axios";
import "./Countries";

let countryUrl = "http://localhost:4000/name/";
let countryUrl2 = "https://api-projectssaleh.herokuapp.com/name/";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.name);
  }

  componentDidMount() {
    const country = this.props.match.params.name;
    const url = `${countryUrl}${country}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        this.props.setCountryDetails(response[0]);
      })
      .catch(err => {
        console.error(err);
      });
  }

  displayAsylum = (asylum) => {
    return asylum && asylum.map(item => {
      return (
        <div className="asylum">
          <p> Origin: {item.Origin}</p>
          <p>
            Country of Asylum or Residence: {item.CountryOfAsylumOrResidence}
          </p>
          <p> Year: {item.year}</p>
          <p> Total: {item.total}</p>
        </div>
      );
    });
  };

  render() {
    const {
      name,
      capital,
      region,
      population,
      demonym,
      flag,
      asylum
    } = this.props.details;
    const asylumInfo = asylum && this.displayAsylum(asylum);
    console.log(asylumInfo);
    return (
      <div>
        <Card>
          <Card.Header as="h5">{name}</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
              <p>Capital City: {capital}</p>
              <p>Region: {region}</p>
              <p>Population: {population}</p>
              <p>Demonym: {demonym}</p>
              <p>Flag: </p>
              <img src={flag} />
          </Card.Body>
        </Card>
        {asylumInfo}
      </div>
    );
  }
}

CountryDetails.propType = {
  match: PropTypes.object,
  details: PropTypes.object,
  setCountryDetails: PropTypes.func
};

export default CountryDetails;
