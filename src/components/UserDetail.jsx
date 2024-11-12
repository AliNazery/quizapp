import React, { useEffect, useState } from "react";

export default function UserDetail({userId}) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!userId) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.log(error));
  }, [userId]);
  return (
    <div>{user ? <h2>{user.name}</h2> : <p>Loading user details...</p>}</div>
  );
}
