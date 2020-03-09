import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let Url = "http://localhost:4000/";
let Url2 = "https://api-projectssaleh.herokuapp.com/";

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(Url)
      .then(response => {
        console.log(response);
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ data: data });
      });
  }

  render() {
    console.log(this.state.data);
    let countries = this.state.data.map(item => {
      return (
        <div className="country" key={item.name}>
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
    return <div className="countryContainer">{countries}</div>;
  }
}

export default Countries;
