import React from "react";
// import _ from "lodash";

export default function AllPhotos({
  photos,
  setCurrentView,
  setSelectedPhoto
}) {
  return (
    <>
      <div className="AllPhotos">
        {photos.map((photo, index) => {
          return (
            <div className="frame">
              <img
                className="image"
                src={`data:image/;base64, ${photo}`}
                alt="i don't know"
                onClick={() => {
                  setSelectedPhoto(index);
                  setCurrentView("SinglePhoto");
                }}
              ></img>
            </div>
          );
        })}
      </div>
    </>
  );
}
