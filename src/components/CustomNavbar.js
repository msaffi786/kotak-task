import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

export default function CustomNavbar() {
  return (
    <>
      <Navbar sticky="top" className="bg-body-tertiary">
        <Container fluid>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
