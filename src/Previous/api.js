import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const userData = async () => {
      let res = await axios("https://jsonplaceholder.typicode.com/users");
      console.log(res.data);
      setUsers(res.data);
    };
    userData();
  }, []);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.username}</h2>
          <h2>{user.email}</h2>
        </div>
      ))}
    </div>
  );
};

export default Api;
