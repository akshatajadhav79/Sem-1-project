import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

export const User_data = () => {
  const [User, SetUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/user_data/")
      .then((res) => {
        console.log("fetched Data:", res.data.user_data);
        SetUsers(res.data.user_data);
      })
      .catch((err) => {
        console.error("Error fretchinh data:", err);
      });
  }, []);
  return (
    <>
      <h2 style={{ textAlign: "center" }}>Users Data</h2>
      <div className="card-grid">
        {User.map((user) => (
          <div className="card" key={user.id}>
            <h3>ID: {user.id}</h3>
            <p>Full Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email:{user.email}</p>
            <p>Phone Number:{user.phone}</p>
            <p>City & Street:{user.city} {user.street}</p>
            <p>Company Name:{user.company.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};
