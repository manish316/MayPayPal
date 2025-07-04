import React, { useState } from "react";
import BackIcon from "./assets/back.png";
import SearchIcon from "./assets/search.png";
import GiftIcon from "./assets/gift.png";
import PeopleIcon from "./assets/people.png";
import BillIcon from "./assets/bill.png";
import "./App.css";

export default function SendUser({ users, onBack, onNext }) {
  const [query, setQuery] = useState("");
  // const filtered = users.filter(
  //   (u) =>
  //     u.name.toLowerCase().includes(query.toLowerCase()) ||
  //     u.username.toLowerCase().includes(query.toLowerCase())
  // );
  return (
    <div className="send-user-container">
      <header className="header send-header">
        <button className="back-btn" onClick={onBack}>
          <img src={BackIcon} alt="Back" style={{ width: 24, height: 24 }} />
        </button>
        <span className="send-title">Send Money</span>
      </header>
      <div className="search-box-wrapper">
        <input
          className="search-box search-box-with-icon"
          placeholder="Name, email, mobile"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          style={{
            backgroundImage: `url(${SearchIcon})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "16px center",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
      {/* <div className="suggestion-list">
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
      </div> */}
      <button
        className="next-btn"
        disabled={query.trim() === "" || query.trim().length < 4}
        onClick={() => query.trim() && onNext(query)}
      >
        Next
      </button>
      <a href="#" className="show-all-contacts-link">
        Show all contacts
      </a>
      <div className="more-options">
        <div className="header-more-options">More options</div>
        <div className="option-list">
          <div className="option-item">
            <img src={PeopleIcon} alt="Pool money" className="option-icon" />
            Pool money
          </div>
          <div className="option-item">
            <img src={BillIcon} alt="Split a bill" className="option-icon" />
            Split a bill
          </div>
          <div className="option-item">
            <img
              src={GiftIcon}
              alt="Send a digital gift card"
              className="option-icon"
            />
            Send a digital gift card
          </div>
        </div>
      </div>
    </div>
  );
}
