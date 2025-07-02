import React, { useState } from "react";
import BackIcon from "./assets/back.svg";
import "./App.css";

export default function SendUser({ users, onBack, onNext }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(query.toLowerCase()) ||
      u.username.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div className="send-user-container">
      <header className="header">
        <button className="back-btn" onClick={onBack}>
          <img src={BackIcon} alt="Back" style={{ width: 24, height: 24 }} />
        </button>
        <span className="send-title">Send Money</span>
      </header>
      <input
        className="search-box"
        placeholder="Name, email, mobile"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setSelected(null);
        }}
      />
      <div className="suggestion-list">
        {filtered.map((u) => (
          <div
            key={u.username}
            className={`suggestion-item${selected === u ? " selected" : ""}`}
            onClick={() => setSelected(u)}
          >
            <span className="suggestion-avatar">{u.name[0]}</span>
            <span className="suggestion-name">{u.name}</span>
            <span className="suggestion-username">@{u.username}</span>
          </div>
        ))}
      </div>
      <button
        className="next-btn"
        disabled={!selected}
        onClick={() => selected && onNext(selected)}
      >
        Next
      </button>
      <div className="more-options">
        <div>More options</div>
        <div className="option-list">
          <div className="option-item">Pool money</div>
          <div className="option-item">Split a bill</div>
          <div className="option-item">Send a digital gift card</div>
        </div>
      </div>
    </div>
  );
}
