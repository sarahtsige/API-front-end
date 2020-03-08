import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

let Url = "http://localhost:4000/region/";
let Url2 = "https://api-projectssaleh.herokuapp.com/region";

class Regions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  getRegionData = (e) => {
    let regionName = e.target.id;
    let regionUrl = `${Url}${regionName}`
    fetch(regionUrl)
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      this.setState({ data: data });
    });
  };




  // componentDidMount() {
  // }




  render() {
    console.log(this.state.data);
    let countries = this.state.data.map(item => {
      return (
        <div className="region" key={item.name}>
          <Card style={{ width: "16rem" }}>
            <Card.Img variant="top" src={item.flag} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Capital: {item.capital}</Card.Text>
              <Link to={"country-details/" + item.name}>
                <Button variant="primary">Country Info</Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return (
        <div>
        <DropdownButton id="dropdown-basic-button" onClick={this.getRegionData}title="Regions">
        <Dropdown.Item id="Africa" href="#/action-1">Africa</Dropdown.Item>
        <Dropdown.Item id="Americas" href="#/action-2">Americas</Dropdown.Item>
        <Dropdown.Item id="Asia" href="#/action-3">Asia</Dropdown.Item>
        <Dropdown.Item id="Europe" href="#/action-4">Europe</Dropdown.Item>
        <Dropdown.Item id="Oceania" href="#/action-5">Oceania</Dropdown.Item>
        <Dropdown.Item id="Polar" href="#/action-6">Polar</Dropdown.Item>
      </DropdownButton>
      <div className="countryContainer">{countries}</div>
      </div>
    )    
  }
}

export default Regions;
