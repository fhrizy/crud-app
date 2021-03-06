import React from "react";
import "./add.scss";

function Add({
  addData,
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setAddress,
}) {
  return (
    <div className="add">
      <div className="header">
        <span>Add Data</span>
      </div>
      <div className="form">
        <form onSubmit={addData}>
          <div className="top">
            <div className="left">
              <label>First Name</label>
              <input
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
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div className="right">
              <label>Phone Number</label>
              <input
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
              <button type="submit" className="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Add;
