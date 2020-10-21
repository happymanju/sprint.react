import React from "react";
import _ from "lodash";
import styles from "../styles/upload.css";
import { useEffect } from "react";

export default function Upload({ setFile, file, wrap }) {
  return (
    <>
      <div className="file-upload" style={styles}>
        <input
          type="file"
          name="select-file"
          id="file-input"
          onInput={e => {
            //filename = e.target.value.slice(e.target.value.lastIndexOf("\\") +1, );
            //console.log(e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />
        <button
          onClick={() => {
            wrap(file);
          }}
        >
          Upload File
        </button>
      </div>
    </>
  );
}
