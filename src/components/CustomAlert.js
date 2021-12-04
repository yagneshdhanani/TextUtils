import React from "react";

export default function CustomAlert({ alert }) {
  return (
    // <div style={{ height: "50px" }}>
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{alert.message}</strong>
      </div>
    )
    // </div>
  );
}
