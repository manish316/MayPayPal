import React from "react";
import "./App.css";

export default function Snackbar({ title, description }) {
  return (
    <div className="snackbar">
      <div className="snackbar-title">{title}</div>
      <div className="snackbar-desc">{description}</div>
    </div>
  );
}
