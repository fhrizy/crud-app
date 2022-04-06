import React from "react";

import Plus from "../assets/plus.svg";
import "../stylesheets/topbar.scss";

function Topbar({ navigate, cancel, setCancel }) {
  return (
    <div className="topbar">
      <div className="head">
        <div className="title">
          <span>CRUD </span>
          <h3> Synapsis.id</h3>
        </div>
        <div
          className={!cancel ? "add-button" : "cancel"}
          onClick={
            !cancel
              ? () => {
                  navigate("/add");
                  setCancel(true);
                }
              : () => {
                  navigate("/");
                  setCancel(false);
                }
          }
        >
          <img src={Plus} alt="plus" />
          <span>{!cancel ? "Add new data" : "Cancel"}</span>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
