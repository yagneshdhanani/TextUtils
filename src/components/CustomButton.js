import React from "react";

export default function CustomButton({ onClick, name, disabled }) {
  return (
    <button
      type="button"
      className="btn btn-primary btn-style"
      onClick={onClick}
      disabled={disabled}
    >
      {name}
    </button>
  );
}
