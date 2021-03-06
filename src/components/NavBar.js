import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import CustomBadge from "./CustomBadge";

export default function NavBar({ title, setMode }) {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
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
        </div>
      </div>
    </nav>
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
