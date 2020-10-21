import React from "react";

export default function SinglePhotos({ selectedPhoto }) {
  return <img src={`data:image/;base64, ${selectedPhoto}`}></img>;
}
