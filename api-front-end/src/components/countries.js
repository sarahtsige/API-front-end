import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
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
        <div className="country" key={item.id}>
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={item.flag} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>Capital: {item.capital}</Card.Text>
              <Button variant="primary">Country Info</Button>
            </Card.Body>
          </Card>
        </div>
      );
    });
    return <div className='countryContainer' >{countries}</div>;
  }
}

//     render() {
//       let countries = countryList.map(item => {

//         return (
//           <div className="countriesdiv" >
//               <h3>Country Name: </h3>
//               <p> Capital: </p>
//           </div>
//         );
//       };
//     }
//   }

export default Countries;
