import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h2> users id length: {users.length}</h2>
      <h3>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            name: {user.name} email: {user.email}
          </li>
        ))}
      </h3>
    </div>
  );
}

export default App;
