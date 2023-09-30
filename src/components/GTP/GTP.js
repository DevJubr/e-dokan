import React from "react";
import { Link } from "react-router-dom";
import "./GTP.scss";
const GTP = ({ text, loc }) => {
  return (
    <>
      <button className="GTP_BTN">
        <Link to={`/${loc}`}>{text} </Link>
      </button>
    </>
  );
};

export default GTP;
