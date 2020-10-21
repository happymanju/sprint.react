import React, { useState } from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import { saveObject, getSingleObject } from "../utils/index";

export default function Navbar({ setCurrentView, setPhotos, photos }) {
  const wrap = async file => {
    try {
      await saveObject(file);
      const result = await getSingleObject(file.name);
      setPhotos([...photos, result]);
      // console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="navbar" onClick={() => setCurrentView("AllPhotos")}>
        <h3 className="navbar-header">All Photos</h3>
        <Upload wrap={wrap} />
      </div>
    </>
  );
}
