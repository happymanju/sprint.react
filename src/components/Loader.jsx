import React from "react";
import loadingGif from "./static/blue_spinner_loader.gif";
export default function Loader() {
  return (
    <>
      <div className="singleframe">
        <img
          className="singlepic"
          alt="blue spinner loading gif"
          src={loadingGif}
        ></img>
      </div>
    </>
  );
}
