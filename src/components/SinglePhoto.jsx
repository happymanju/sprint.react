import React from "react";

export default function SinglePhotos({ selectedPhoto }) {
  return (
    <>
      <div className="singleframe">
        <img
          className="singlepic"
          alt="garlic"
          src={`data:image/;base64, ${selectedPhoto}`}
        ></img>
      </div>
    </>
  );
}
