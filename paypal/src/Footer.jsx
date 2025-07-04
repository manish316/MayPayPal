import React from "react";
import Home from "./assets/home.png";
import Wallet from "./assets/wallet.png";
import Payment from "./assets/payment.png";
import Profile from "./assets/profile.png";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button className="footer-btn">
        <img src={Home} alt="Home" />
        <div className="footer-label">Home</div>
      </button>
      <button className="footer-btn">
        <img src={Wallet} alt="Wallet" />
        <div className="footer-label">Wallet</div>
      </button>
      <button className="footer-btn">
        <img src={Payment} width="35px" className="payment-icon" alt="Pay" />
        <div className="footer-label">Payments</div>
      </button>
      <button className="footer-btn">
        <img src={Profile} alt="Profile" />
        <div className="footer-label">Profile</div>
      </button>
    </footer>
  );
}
