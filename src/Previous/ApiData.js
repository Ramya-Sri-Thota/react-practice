import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiData = () => {
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
    <>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <h3>{user.address.street}</h3>
        </div>
      ))}
    </>
  );
};
export default ApiData;
