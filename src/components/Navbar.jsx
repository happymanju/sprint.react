import React, { useState } from "react";
import "../styles/navbar.css";
import _ from "lodash";
import Upload from "./Upload";
import { saveObject, getSingleObject } from "../utils/index";

export default function Navbar({ setCurrentView, setPhotos, photos }) {
  const [file, setFile] = useState();

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
        Test Navigation Bar
        <Upload setFile={setFile} file={file} wrap={wrap} />
      </div>
    </>
  );
}
