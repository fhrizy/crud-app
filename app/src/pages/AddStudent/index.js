import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../../useRedux/actions/StudentActions";
import Add from "./Add";

function AddStudent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addData = (e) => {
    e.preventDefault();
    const student = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    };
    dispatch(addStudent(student));
    navigate("/");
  };

  return (
    <>
      <Add
        addData={addData}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
      />
    </>
  );
}

export default AddStudent;
