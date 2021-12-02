import React from "react";

export default function CustomBadge({ type, txt, setMode, textType }) {
  return (
    <span
      className={`badge bg-${type} pill-style ${textType}`}
      onClick={() => setMode(type)}
    >
      {txt}
    </span>
  );
}
