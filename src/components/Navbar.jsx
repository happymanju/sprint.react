import React from "react";
import "../styles/navbar.css";
// import _ from "lodash";
import Upload from "./Upload";
import { saveObject, getSingleObject } from "../utils/index";

export default function Navbar({ setCurrentView, setPhotos, photos }) {
  const wrap = async file => {
    try {
      await saveObject(file);
      const result = await getSingleObject(file.name);
      setPhotos([...photos, result]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navblock" onClick={() => setCurrentView("AllPhotos")}>
        <h1>Mike-TonyGram</h1>
        <div className="navbar">
          <h3 className="navbar-header">All Photos</h3>
          <Upload wrap={wrap} />
        </div>
      </div>
    </>
  );
}
