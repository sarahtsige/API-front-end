import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Jumbotron className="jumbotron">
      <h1 className="homeTitle">Country API</h1>
      <p className="homeText">
        To view country data, click on of the links above or click below to see
        all countries.
      </p>
      <p>
        <Link to="/countries">
          <Button variant="primary">See All Countries</Button>
        </Link>
      </p>
    </Jumbotron>
  );
}

export default Home;
