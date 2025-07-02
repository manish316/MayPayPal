import React from "react";
import AddFundsIcon from "./assets/addfunds.svg";
import HomeIcon from "./assets/home.svg";
import ClipboardIcon from "./assets/clipboard.svg";
import DocIcon from "./assets/doc.svg";
import LocationIcon from "./assets/location.svg";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button className="footer-btn">
        <img src={AddFundsIcon} alt="Add Funds" />
      </button>
      <button className="footer-btn">
        <img src={HomeIcon} alt="Home" />
      </button>
      <button className="footer-btn">
        <img src={ClipboardIcon} alt="Clipboard" />
      </button>
      <button className="footer-btn">
        <img src={DocIcon} alt="Doc" />
      </button>
      <button className="footer-btn">
        <img src={LocationIcon} alt="Location" />
      </button>
    </footer>
  );
}
