import React from "react";
import PropTypes from "prop-types";

// import { Link } from "react-router-dom";
import CustomBadge from "./CustomBadge";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar({ title, mode, setMode, clrObj }) {
  // const variant = mode === "info" || mode === "light" ? "light" : "dark";

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>

          <CustomBadge type="primary" setMode={setMode} txt="Blue" />
          <CustomBadge type="secondary" setMode={setMode} txt="Gray" />
          <CustomBadge type="success" setMode={setMode} txt="Green" />
          <CustomBadge type="danger" setMode={setMode} txt="Red" />
          <CustomBadge type="warning" setMode={setMode} txt="Yellow" />
          <CustomBadge type="info" setMode={setMode} txt="Sky Blue" />
          <CustomBadge
            type="light"
            setMode={setMode}
            txt="Light"
            textType="text-dark"
          />
          <CustomBadge type="dark" setMode={setMode} txt="Dark" />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
};

NavBar.defaultProps = {
  title: "Place title here",
};

// Dark Mode Options

/* <Form.Check
              type="switch"
              id="custom-switch"
              onClick={toggleMode}
              className={`text-${mode === "dark" ? "light" : "dark"}`}
              label={mode === "light" ? "Dark Mode" : "Light Mode"}
            /> */

/* <Button
            variant={"primary"}
            onClick={toggleMode}
            className={`text-${mode === "dark" ? "light" : "dark"}`}
          >
            {mode === "light" ? "Dark Mode" : "Light Mode"}
          </Button> */
