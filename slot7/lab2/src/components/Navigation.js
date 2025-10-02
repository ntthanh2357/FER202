import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#">Pizza House</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="danger">🔍</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
