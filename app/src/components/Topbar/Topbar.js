import React from "react";
import Plus from "../../assets/plus.svg";
import "./topbar.scss";

function Topbar({ navigate, location }) {
  return (
    <div className="topbar">
      <div className="head">
        <div className="title">
          <span>CRUD </span>
          <h3> Synapsis.id</h3>
        </div>
        <div
          className={location.pathname === "/" ? "add-button" : "cancel"}
          onClick={
            location.pathname === "/"
              ? () => {
                  navigate("/add");
                }
              : () => {
                  navigate("/");
                }
          }
        >
          <img src={Plus} alt="plus" />
          <span>{location.pathname === "/" ? "Add new data" : "Cancel"}</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
