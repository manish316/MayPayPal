import React, { useState } from "react";
import Home from "./Home";
import SendUser from "./SendUser";
import SendAmount from "./SendAmount";
import Snackbar from "./Snackbar";
import Footer from "./Footer";
import "./App.css";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  const [page, setPage] = useState("home");
  const [balance, setBalance] = useState(41742352);
  const [transactions, setTransactions] = useState([]);
  const [snackbar, setSnackbar] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleSend = (user, amount) => {
    setBalance((b) => b - amount);
    setTransactions((txs) => [
      {
        username: user,
        name: user,
        amount,
        date: new Date().toLocaleDateString("en-GB"),
      },
      ...txs,
    ]);
    setSnackbar({
      title: "Payment sent successfully",
      description: `€${amount.toLocaleString()} sent to ${user}`,
    });
    setTimeout(() => setSnackbar(null), 1500);
  };

  return (
    <div className="paypal-app">
      {page === "home" && (
        <Home
          balance={balance}
          transactions={transactions}
          // onSend={() => setPage("sendUser")}
          onSend={null}
          onRequest={() => alert("Request feature not implemented")}
          onClearAll={() => setTransactions([])}
        />
      )}
      {page === "sendUser" && (
        <SendUser
          onBack={() => setPage("home")}
          onNext={(userName) => {
            setSelectedUser(userName);
            setPage("sendAmount");
          }}
        />
      )}
      {page === "sendAmount" && selectedUser && (
        <SendAmount
          user={selectedUser}
          balance={balance}
          onBack={() => setPage("sendUser")}
          onSend={(amount) => {
            handleSend(selectedUser, amount);
            setPage("home");
          }}
        />
      )}
      {snackbar && (
        <Snackbar title={snackbar.title} description={snackbar.description} />
      )}
      <Footer />
      <Analytics />
    </div>
  );
}
