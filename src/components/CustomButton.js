import React from "react";
import { Button } from "react-bootstrap";

export default function CustomButton({ onClick, text }) {
  return (
    <Button onClick={onClick} className="btn-style" variant="primary">
      {text}
    </Button>
  );
}
