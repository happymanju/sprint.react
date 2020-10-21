import React from "react";
import _ from "lodash";
import styles from "../styles/upload.css";

export default function Upload({ setFile }) {
  return (
    <>
      <div className="file-upload" style={styles}>
        <input
          type="file"
          name="select-file"
          id="file-input"
          onInput={() => console.log("yowza")}
        />
        <button>Upload File</button>
      </div>
    </>
  );
}
