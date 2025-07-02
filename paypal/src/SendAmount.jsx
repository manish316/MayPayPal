import React, { useState } from "react";
import BackIcon from "./assets/back.svg";
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
      <header className="header">
        <button className="back-btn" onClick={onBack}>
          <img src={BackIcon} alt="Back" style={{ width: 24, height: 24 }} />
        </button>
        <span className="send-title">Send money</span>
      </header>
      <div className="send-user-avatar">{user.name[0]}</div>
      <div className="send-user-name">@{user.username}</div>
      <div className="amount-input-row">
        <input
          className="amount-input"
          type="number"
          placeholder="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={sending}
        />
        <span className="currency-label">EUR</span>
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
                : ""
            } EUR`}
      </button>
      <div className="terms">Terms and Conditions</div>
    </div>
  );
}
