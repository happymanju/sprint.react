import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "../components/Navbar";
import AllPhotos from "../components/AllPhotos";
import SinglePhoto from "../components/SinglePhoto";

export default function App() {
  // currentView usestate()

  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState(["photo1"]);
  const [selectedPhoto, setSelectedPhoto] = useState();

  return (
    <>
      <div className="app">
        {/*
        NAVBAR
          NAVBAR > UPLOAD
          
        PHOTOS(currentviews)
      */}

        <h1>Hello World!</h1>
        <Navbar setCurrentView={setCurrentView} />
        <h3>{currentView}</h3>
        {currentView === "AllPhotos" ? (
          <AllPhotos photos={photos} />
        ) : (
          <SinglePhoto />
        )}
      </div>
    </>
  );
}
