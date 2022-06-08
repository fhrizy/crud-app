import React, { useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Data from "./pages/Data";
import Topbar from "./components/Topbar";
import "./app.scss";

function App() {
  const [id, setId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const addData = async (e) => {
    e.preventDefault();
    await axios.post(`http://localhost:8080/api/create`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    });
    navigate("/");
  };

  const deleteData = async (id) => {
    await axios.delete(`http://localhost:8080/api/delete/${id}`);
    navigate("/");
  };

  const editRequest = async (id) => {
    await axios.get(`http://localhost:8080/api/findone/${id}`).then((res) => {
      setFirstName(res.data.data.firstName);
      setLastName(res.data.data.lastName);
      setEmail(res.data.data.email);
      setPhone(res.data.data.phone);
      setAddress(res.data.data.address);
    });
  };

  const editData = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/update/${id}`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    });
    navigate("/");
  };

  return (
    <div className="app">
      <div className="pages">
        <Topbar navigate={navigate} location={location} />
        <div className="body">
          <Routes>
            <Route
              path="/"
              element={
                <Data
                  navigate={navigate}
                  deleteData={deleteData}
                  setId={setId}
                  editRequest={editRequest}
                />
              }
            />
            <Route
              path="/add"
              element={
                <Add
                  addData={addData}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setAddress={setAddress}
                />
              }
            />
            <Route
              path={`/edit/${id}`}
              element={
                <Edit
                  editData={editData}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phone={phone}
                  address={address}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setEmail={setEmail}
                  setPhone={setPhone}
                  setAddress={setAddress}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
