import React from "react";
import _ from "lodash";

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
            <img
              src={`data:image/;base64, ${photo}`}
              onClick={() => {
                setSelectedPhoto(index);
                setCurrentView("SinglePhoto");
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
}
