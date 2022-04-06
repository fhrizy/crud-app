import React from "react";
import "../stylesheets/edit.scss"

function Edit({
  editData,
  firstName,
  lastName,
  email,
  phone,
  address,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAddress,
}) {
  return (
    <div className="edit">
      <div className="header">
        <span>Edit Data</span>
      </div>
      <div className="form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="top">
            <div className="left">
              <label>First Name</label>
              <input
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                autoFocus
                required
              />
            </div>
            <div className="right">
              <label>Last Name</label>
              <input
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="top">
            <div className="left">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="right">
              <label>Phone Number</label>
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className="bottom">
            <div className="left">
              <label>Address</label>
              <textarea
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                required
              />
            </div>
            <div className="right">
              <button type="reset" className="reset">
                Reset
              </button>
              <button type="submit" className="submit" onClick={editData}>
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Edit;
