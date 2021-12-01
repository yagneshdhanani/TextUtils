import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

import CustomButton from "./CustomButton";

export default function TextForm({ heading, mode, showAlert, clrObj }) {
  const [text, setText] = useState("");

  const handleOnUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    showAlert("Converted to UpperCase!", "success");
  };

  const handleOnLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    showAlert("Converted to LoweCase!", "success");
  };

  const handleCopy = () => {
    let txt = document.getElementById("txtArea");
    txt.select();
    navigator.clipboard.writeText(txt.value);
    showAlert("Copied to clipboard", "success");
  };

  const handleWordsReverse = () => {
    let arr = text.trim().split(" ");
    let str = "";
    arr.forEach((ar) => {
      str += ar.split("").reverse().join("") + " ";
    });

    setText(str.trim());
    showAlert("All words has been reversed!", "success");
  };

  const handleStringReverse = () => {
    let arr = text.trim().split("");
    setText(arr.reverse().join(""));
    showAlert("String has been reversed!", "success");
  };

  const handleOnCapital = () => {
    let arr = text.trim().split(" ");
    let str = "";
    arr.forEach((ar) => {
      ar = ar.split("");
      ar[0] = ar[0].toUpperCase();
      str += ar.join("") + " ";
    });

    setText(str.trim());
    showAlert("First latter capitalized!", "success");
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    showAlert("Extra spaces has been removed!", "success");
  };

  const handleOnClear = () => {
    setText("");

    showAlert("Text has been cleared!", "danger");
  };

  return (
    <>
      <Container
        className="my-3"
        style={{ color: mode === "light" ? "black" : "white" }}
      >
        <Form>
          <Form.Group className="mb-3">
            <h1>{heading}</h1>
            <Form.Control
              as="textarea"
              value={text}
              id="txtArea"
              onChange={(e) => setText(e.target.value)}
              rows={8}
              style={{
                backgroundColor: `${clrObj.color}`,
                color: mode === "light" ? "black" : "white",
              }}
              placeholder="Enter text here ..."
            />
          </Form.Group>
        </Form>

        <CustomButton onClick={handleOnUppercase} text="Convert to Uppercase" />
        <CustomButton onClick={handleOnLowercase} text="Convert to LowerCase" />
        <CustomButton onClick={handleCopy} text="Copy Text" />
        <CustomButton onClick={handleWordsReverse} text="Reverse all Words" />
        <CustomButton onClick={handleStringReverse} text="Reverse String" />
        <CustomButton onClick={handleOnCapital} text="Capitalize Words" />
        <CustomButton onClick={handleExtraSpaces} text="Remove extra spaces" />
        <CustomButton onClick={handleOnClear} text="Clear all words" />

        <h2 className="my-3">Text Summary</h2>
        <p>
          <b>{text.split(" ").filter((a) => a !== "").length}</b> words &{" "}
          <b>{text.length}</b> character
        </p>
        <p>
          <b>
            {(text.split(" ").filter((a) => a !== "").length * 0.008).toFixed(
              3
            )}
          </b>{" "}
          minutes to read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter text in the above textbox to preview here."}
        </p>
      </Container>
    </>
  );
}
