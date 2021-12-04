import React, { useState } from "react";

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
    navigator.clipboard.writeText(text);
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

    showAlert("Text has been cleared!", "warning");
  };

  return (
    <div
      className="container my-3"
      style={{ color: mode === "light" ? "black" : "white" }}
    >
      <form>
        <div className="mb-3">
          <h1>{heading}</h1>

          <textarea
            className="form-control"
            id="txtArea"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            style={{
              backgroundColor: `${clrObj.backgroundColor}`,
              color: mode === "light" ? "black" : "white",
            }}
            placeholder="Enter text here ..."
          ></textarea>
        </div>
      </form>

      <CustomButton
        onClick={handleOnUppercase}
        disabled={text.length === 0}
        name="Convert to Uppercase"
      />
      <CustomButton
        onClick={handleOnLowercase}
        disabled={text.length === 0}
        name="Convert to LowerCase"
      />
      <CustomButton
        onClick={handleCopy}
        disabled={text.length === 0}
        name="Copy Text"
      />
      <CustomButton
        onClick={handleWordsReverse}
        disabled={text.length === 0}
        name="Reverse all Words"
      />
      <CustomButton
        onClick={handleStringReverse}
        disabled={text.length === 0}
        name="Reverse String"
      />
      <CustomButton
        onClick={handleOnCapital}
        disabled={text.length === 0}
        name="Capitalize Words"
      />
      <CustomButton
        onClick={handleExtraSpaces}
        disabled={text.length === 0}
        name="Remove Extra Spaces"
      />
      <CustomButton
        onClick={handleOnClear}
        disabled={text.length === 0}
        name="Clear all Words"
      />

      <h2 className="my-3">Text Summary</h2>
      <p>
        <b>{text.split(/\s+/).filter((a) => a !== "").length}</b> words &{" "}
        <b>{text.length}</b> character
      </p>
      <p>
        <b>
          {(text.split(" ").filter((a) => a !== "").length * 0.008).toFixed(3)}
        </b>{" "}
        minutes to read
      </p>
      <h2>Preview</h2>
      <p>{text.length > 0 ? text : "Noting to preview!!"}</p>
    </div>
  );
}
