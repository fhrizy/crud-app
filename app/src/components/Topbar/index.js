import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import TopbarLayout from "./Topbar";

function Topbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <TopbarLayout navigate={navigate} location={location} />
    </>
  );
}

export default Topbar;
