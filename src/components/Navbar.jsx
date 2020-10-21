import React, { useState } from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";

export default function Navbar({ setCurrentView }) {
  const [file, setFile] = useState();

  return (
    <>
      <div className="navbar" onClick={() => setCurrentView("AllPhotos")}>
        Test Navigation Bar
        <Upload setFile={setFile} />
      </div>
    </>
  );
}
