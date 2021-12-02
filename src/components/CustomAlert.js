import React from "react";

export default function CustomAlert({ alert }) {
  return (
    alert && (
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{alert.message}</strong>
      </div>
    )
  );
}
