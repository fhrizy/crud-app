import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateStudent } from "../../useRedux/actions/StudentActions";
import Edit from "./Edit";

function EditStudent() {
  const { getDetailStudent } = useSelector((state) => state.StudentsReducers);
  const [firstName, setFirstName] = useState(getDetailStudent.firstName);
  const [lastName, setLastName] = useState(getDetailStudent.lastName);
  const [email, setEmail] = useState(getDetailStudent.email);
  const [phone, setPhone] = useState(getDetailStudent.phone);
  const [address, setAddress] = useState(getDetailStudent.address);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const updateData = (e) => {
    e.preventDefault();
    const student = {
      id: getDetailStudent.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
    };
    dispatch(updateStudent(student));
    navigate("/");
  };
  return (
    <>
      <Edit
        updateData={updateData}
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
    </>
  );
}

export default EditStudent;
