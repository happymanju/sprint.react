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
            <figure>
              <img
                className="image"
                src={`data:image/;base64, ${photo}`}
                alt="i don't know"
                onClick={() => {
                  setSelectedPhoto(index);
                  setCurrentView("SinglePhoto");
                }}
              ></img>
            </figure>
          );
        })}
      </div>
    </>
  );
}
