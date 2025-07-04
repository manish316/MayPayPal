import React from "react";
import "./App.css";
import Footer from "./Footer";
import PaypalLogo from "./assets/paypal.png";
import ProfileIcon from "./assets/manish.jpg";
import StoreIcon from "./assets/in-store.png";
import RightArrow from "./assets/right-arrow.png";

export default function Home({
  balance,
  transactions,
  onSend,
  onRequest,
  onClearAll,
}) {
  return (
    <div className="home-container">
      <header className="header">
        <div className="header-left">
          <img src={PaypalLogo} className="paypal-logo" alt="PayPal Logo" />
        </div>
        <div className="header-right">
          <img src={ProfileIcon} className="profile-icon" alt="Profile" />
        </div>
      </header>
      <div className="balance-card">
        <div className="balance-label">PayPal balance</div>
        <div className="balance-amount">
          €{balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </div>
        <div className="balance-actions">
          <button className="send-btn" onClick={onSend}>
            Send
          </button>
          <button className="request-btn" onClick={onRequest}>
            Request
          </button>
        </div>
      </div>
      <div className="quick-actions">
        <button className="quick-btn">
          <img
            src={StoreIcon}
            width="28px"
            height="28px"
            className="quick-icon"
            alt="Store"
          />
          Pay in store
        </button>
        <button className="quick-btn">
          <img
            src={RightArrow}
            width="28px"
            height="28px"
            className="quick-icon"
            alt="Bank"
          />
          Transfer to bank
        </button>
      </div>
      <div className="recent-activity">
        <div className="recent-header">
          <span>Recent activity</span>
          <button className="clear-all" onClick={onClearAll}>
            Clear All
          </button>
        </div>
        <div className="activity-list">
          {transactions.map((tx, i) => (
            <div className="activity-item" key={i}>
              <div className="activity-user">@{tx.username}</div>
              <div className="activity-date">{tx.date}</div>
              <div className="activity-amount">
                €
                {tx.amount.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
