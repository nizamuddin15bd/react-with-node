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

  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const user = { name, email };
    console.log(user);

    // post data to server
    fetch("http://localhost:5000/user", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <h2> users id length: {users.length}</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
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
