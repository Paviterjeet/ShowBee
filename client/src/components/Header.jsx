import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import logo from "../assets/logo.png"; // Your Show Bee logo file

const Header = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-1">
      <Container fluid>

        {/* Left - Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center ">
          <img
            src={logo}
            alt="Show Bee Logo"
            height="60"
            className="me-2"
          />
         
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Middle - Navigation */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link href="/" className="text-dark">Home</Nav.Link>
            <Nav.Link href="/events" className="text-dark">Events</Nav.Link>
            <Nav.Link href="/categories" className="text-dark">Categories</Nav.Link>
            <Nav.Link href="/contact" className="text-dark">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right - Search + Login */}
        <div className="d-flex align-items-center gap-2">
          <Form className="d-flex">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <FaSearch className="text-muted" />
              </span>
              <FormControl
                type="search"
                placeholder="Search..."
                className="border-start-0 shadow-none"
              />
            </div>
          </Form>
          <Button variant="danger" className="px-3">Login / Signup</Button>
        </div>

      </Container>
    </Navbar>
  );
};

export default Header;
