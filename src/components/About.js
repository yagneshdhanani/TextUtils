import React, { useState } from "react";
import { Accordion, Container, Button } from "react-bootstrap";

export default function About() {
  const [themeStyle, setThemeStyle] = useState({
    backgroundColor: "white",
    color: "black",
  });
  const [btnText, setBtnText] = useState("Dark Mode");
  const [btnVariant, setBtnVariant] = useState("dark");

  const toggleStyle = () => {
    if (themeStyle.backgroundColor === "white") {
      setThemeStyle({
        backgroundColor: "black",
        color: "white",
        border: "1px solid white",
      });
      setBtnText("Light Mode");
      setBtnVariant("light");
    } else {
      setThemeStyle({ backgroundColor: "white", color: "black" });
      setBtnText("Dark Mode");
      setBtnVariant("dark");
    }
  };

  return (
    <div>
      <Container style={themeStyle} className="my-3">
        <h1 className="my-2">About Us</h1>
        <Accordion>
          <Accordion.Item style={themeStyle} eventKey="0">
            <Accordion.Header style={{ backgroundColor: "red" }}>
              Accordion Item #1
            </Accordion.Header>
            <Accordion.Body style={themeStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #2</Accordion.Header>
            <Accordion.Body style={themeStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Button variant={btnVariant} onClick={toggleStyle} className="my-3">
          {btnText}
        </Button>
      </Container>
    </div>
  );
}
