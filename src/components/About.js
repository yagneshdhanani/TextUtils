import React from "react";

export default function About({ mode, clrObj }) {
  const bodyStyle = {
    backgroundColor: `${clrObj.color}`,
    color:
      mode === "light" || mode === "info" || mode === "warning"
        ? "black"
        : "white",
  };

  const headingStyle = {
    backgroundColor: `${clrObj.backgroundColor}`,
    color:
      mode === "light" || mode === "info" || mode === "warning"
        ? "black"
        : "white",
    border: `1px solid ${
      mode === "light" || mode === "info" || mode === "warning"
        ? "black"
        : "white"
    }`,
  };

  const themeStyle = {
    backgroundColor: `${clrObj.secondaryBgColor}`,
    color:
      mode === "light" ||
      mode === "secondary" ||
      mode === "warning" ||
      mode === "info"
        ? "black"
        : "white",
    border: `1px solid ${
      mode === "light" || mode === "info" || mode === "warning"
        ? "black"
        : "white"
    }`,
    borderTop: "0px",
  };

  return (
    <div className="container my-3" style={bodyStyle}>
      <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <strong
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={headingStyle}
            >
              Analyze Your text
            </strong>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              Textutils gives you a way to analyze your text quickly and
              efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <strong
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={headingStyle}
            >
              Free to use
            </strong>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              TextUtils is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextUtils reports the number of words and characters. Thus it is
              suitable for writing text with word/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <strong
              style={headingStyle}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser Compatible
            </strong>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={themeStyle}>
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
