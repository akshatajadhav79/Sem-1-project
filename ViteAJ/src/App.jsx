import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useEffect, useState } from "react";
import axios from "axios";
import {BrowserRouter ,Routes, Route, Router } from "react-router-dom"
import { User_data } from './componets/User_data';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/users/")
      .then((res) => {
        console.log("Fetched data:", res.data.users);
        setNotes(res.data.users);
      })
      .catch((err) => {
        console.error("Error fetching notes:", err);
      });
  }, []);

  return (
    <div style={{}}>

      <BrowserRouter>
      <div>
      <Routes>
        <Route  path='/user_data' element={<User_data />} />
        </Routes>
        </div>
      </BrowserRouter>

      {/* <h2>Notes</h2> */}
      <h5><a href='/user_data'>User Data</a></h5>

      {/* this form sql data */}
      {/* <h3>This from sql data</h3>
      <ul>
        {notes.map((note) => (
          <li key={note._id} style={{ marginBottom: "10px" ,backgroundColor:"blue" ,borderRadius:'9px' ,color:'white'}}>
            <strong>Title:</strong> {note.title} <br />
            <strong>Description:</strong> {note.desc} <br />
            <strong>Important:</strong> {note.important ? "Yes" : "No"}
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default App
