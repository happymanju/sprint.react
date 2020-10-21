import React from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar({ SetCurrentView }) {
  return (
    <>
      <div className="navbar" onClick={() => SetCurrentView("AllPhotos")}>
        Test Navigation Bar
      </div>
      />
      <Upload />
    </>
  );
}
