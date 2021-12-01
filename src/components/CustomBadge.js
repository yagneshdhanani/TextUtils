import React from "react";
import { Badge } from "react-bootstrap";

export default function CustomBadge({ type, txt, setMode, ...otherProps }) {
  return (
    <Badge
      pill
      className="pill-style"
      bg={type}
      onClick={() => setMode(type)}
      {...otherProps}
    >
      {txt}
    </Badge>
  );
}
