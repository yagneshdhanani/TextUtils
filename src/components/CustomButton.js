import React from "react";

export default function CustomButton({ onClick, text }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-style"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
