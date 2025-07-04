import React, { useState } from "react";
import BackIcon from "./assets/back.png";
import "./App.css";

export default function SendAmount({ user, balance, onBack, onSend }) {
  const [amount, setAmount] = useState("");
  const [sending, setSending] = useState(false);
  const valid =
    amount && !isNaN(amount) && Number(amount) > 0 && Number(amount) <= balance;

  const handleSend = () => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      onSend(Number(amount));
    }, 2000);
  };

  return (
    <div className="send-amount-container">
      <header className="header send-header">
        <button className="back-btn" onClick={onBack}>
          <img src={BackIcon} alt="Back" style={{ width: 24, height: 24 }} />
        </button>
        <span className="send-title">Send Money</span>
      </header>
      <div className="send-user-info">
        <div className="send-user-avatar">
          {typeof user === "string" ? user.slice(0, 2) : ""}
        </div>
        <div className="send-user-name">{user}</div>
      </div>
      <div className="amount-input-row">
        <div className="amount-input-wrapper">
          <input
            className="amount-input"
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            disabled={sending}
          />
          <span className="currency-label-inside">EUR</span>
        </div>
      </div>
      <button
        className={`send-amount-btn${valid && !sending ? " enabled" : ""}`}
        disabled={!valid || sending}
        onClick={handleSend}
      >
        {sending
          ? "Sending..."
          : `Send ${
              amount
                ? Number(amount).toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                  })
                : "0.00"
            } EUR`}
      </button>
      <div className="terms">
        <div className="terms-title">Terms and Conditions</div>
        <div className="terms-desc">
          By sending money, you agree to PayPal's user agreement and privacy
          policy.
        </div>
      </div>
    </div>
  );
}
