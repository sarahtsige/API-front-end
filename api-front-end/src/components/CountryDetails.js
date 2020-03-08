import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ModalDialog from "react-bootstrap/ModalDialog";
import Modal from "react-bootstrap/Modal";
// import ModalDialog from "react-bootstrap/ModalDialog";

// import axios from "axios";
import "./Countries";

let countryUrl = "http://localhost:4000/name/";
let countryUrl2 = "https://api-projectssaleh.herokuapp.com/name/";

class CountryDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {details: {}}
  

    console.log(props.match.params.name);
  }

  componentDidMount() {
    const country = this.props.match.params.name;
    const url = `${countryUrl}${country}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({details: response[0]})
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const {name, capital, region, population, demonym, flag} = this.state.details;
    return (
      <div>
        <ModalDialog>
        <Modal.Header closeButton>
    <Modal.Title>{name}</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <p>Capital City: {capital}</p>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Demonym: {demonym}</p>
        <p>Flag: </p>
        <image src={flag} />
        
  </Modal.Body>

  <Modal.Footer>
    {/* <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button> */}
  </Modal.Footer>
</ModalDialog>




      </div>
    );
  }
}

export default CountryDetails;
