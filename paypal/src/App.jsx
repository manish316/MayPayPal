import React, { useState } from "react";
import Home from "./Home";
import SendUser from "./SendUser";
import SendAmount from "./SendAmount";
import Snackbar from "./Snackbar";
import "./App.css";

const initialUsers = [
  { name: "Emily Smith", username: "emily_smith" },
  { name: "Olivia Martinez", username: "olivia_m" },
  { name: "Liam Jones", username: "liam.j" },
];

export default function App() {
  const [page, setPage] = useState("home");
  const [balance, setBalance] = useState(41742352);
  const [transactions, setTransactions] = useState([]);
  const [snackbar, setSnackbar] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [users] = useState(initialUsers);

  const handleSend = (user, amount) => {
    setBalance((b) => b - amount);
    setTransactions((txs) => [
      {
        username: user.username,
        name: user.name,
        amount,
        date: new Date().toLocaleDateString("en-GB"),
      },
      ...txs,
    ]);
    setSnackbar({
      message: `€${amount.toLocaleString()} sent to @${user.username}`,
    });
    setTimeout(() => setSnackbar(null), 3500);
  };

  return (
    <div className="paypal-app">
      {page === "home" && (
        <Home
          balance={balance}
          transactions={transactions}
          onSend={() => setPage("sendUser")}
          onRequest={() => alert("Request feature not implemented")}
          onClearAll={() => setTransactions([])}
        />
      )}
      {page === "sendUser" && (
        <SendUser
          users={users}
          onBack={() => setPage("home")}
          onNext={(user) => {
            setSelectedUser(user);
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
      {snackbar && <Snackbar message={snackbar.message} />}
    </div>
  );
}
