import React, { useRef } from "react";
// import _ from "lodash";
import "../styles/upload.css";

export default function Upload({ wrap }) {
  const inputEl = useRef(null);

  return (
    <>
      <div className="file-upload">
        <input
          type="file"
          id="file-input"
          onInput={e => {
            wrap(e.target.files[0]);
          }}
          ref={inputEl}
        />
        <button
          className="button"
          onClick={() => {
            inputEl.current.click();
          }}
        >
          Upload File
        </button>
      </div>
    </>
  );
}
