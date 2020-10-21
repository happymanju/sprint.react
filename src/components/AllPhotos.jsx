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
        {photos.map(photo => {
          return (
            <img
              src={`data:image/;base64, ${photo}`}
              onClick={() => {
                setSelectedPhoto(photo);
                setCurrentView("SinglePhoto");
              }}
            ></img>
          );
        })}
      </div>
    </>
  );
}
