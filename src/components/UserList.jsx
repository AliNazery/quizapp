import React, { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respose) => respose.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error Fatcin Data", error));
  }, []);

  return (
    <>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}> {user.name}</li>
        ))}
      </ul>
    </>
  );
}
