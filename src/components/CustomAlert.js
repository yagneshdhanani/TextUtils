import React from "react";
import { Alert } from "react-bootstrap";

export default function CustomAlert({ alert }) {
  return (
    alert && (
      <Alert variant={alert.type} dismissible>
        <h5>{alert.message}</h5>
      </Alert>
    )
  );
}
