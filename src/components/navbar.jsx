import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { LinkContainer } from "react-router-bootstrap";

function MoveflixNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img src="img/logo.png" alt="moveflix" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/" relative="path">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Library" relative="path">
                <Nav.Link>Library</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/Contact" relative="path">
                <Nav.Link>Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex btn-search">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-1"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button className="btn-sign" variant="primary" onClick={handleShow}>
              Sign In
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control input_email"
            type="email"
            id="email"
            placeholder="Enter phone number or email address"
          />
          <div className="signin">
            <div>
              <input
                className="form-control input_email"
                type="email"
                id="email"
                placeholder="Enter phone number or email address"
              />
            </div>

            <div className="form-check form-switch d-flex justify-content-center align-items-center mt_24">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                style={{ margin: 0 }}
              />
              <label
                className="form-check-label or_text"
                for="flexSwitchCheckDefault"
              >
                Keep me signed in
              </label>
            </div>

            <div className="d-flex flex-column">
              <button
                type="button"
                className="btn btn-warning mt_24 btn_signin"
              >
                Sign In
              </button>
              <button type="button" className="btn btn-link mt_24 btn_signup">
                Sign Up
              </button>
            </div>

            <div className="or_text mt_24" style={{ textAlign: "center" }}>
              or
            </div>

            <div className="d-flex flex-column mt_24" style={{ gap: "12px" }}>
              <button type="button" className="btn btn-light btn_sosmed">
                <i className="bi bi-google"></i>
                Continue with Google
              </button>
              <button type="button" className="btn btn-light btn_sosmed">
                <i className="bi bi-facebook"></i>
                Continue with Facebook
              </button>
              <button type="button" className="btn btn-light btn_sosmed">
                <i className="bi bi-apple"></i>
                Continue with Apple
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MoveflixNavbar;
