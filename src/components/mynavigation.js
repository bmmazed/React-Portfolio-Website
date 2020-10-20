import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { NavLink } from "react-router-dom";
import "../css/style.css";

class Mynavigation extends Component {
  render() {
    const liStyle = {
      color: "#B3B6B7",
      textDecoration: "none",
    };
    return (
      <div className="mynavigation">
        <Container>
          <Row>
            <Col sm={4}></Col>
            <Col sm={4}>
              <ul className="topnav">
          <li>
            <NavLink
              style={liStyle}
              exact
              activeStyle={{ color: "#FBFCFC" }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={liStyle}
              exact
              activeStyle={{ color: "#FBFCFC" }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={liStyle}
              exact
              activeStyle={{ color: "#FBFCFC" }}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default Mynavigation;
