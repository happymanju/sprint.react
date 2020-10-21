import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "../components/Navbar";
import AllPhotos from "../components/AllPhotos";

export default function App() {
  // currentView usestate()

  const [currentView, SetCurrentView] = useState("SinglePhoto");

  return (
    <>
      <div className="app">
        {/*
        NAVBAR
          NAVBAR > UPLOAD
          
        PHOTOS(currentviews)
      */}

        <h1>Hello World!</h1>
        <Navbar SetCurrentView={SetCurrentView} />
        <h3>{currentView}</h3>
        {currentView === "AllPhotos" ? <AllPhotos /> : null}
      </div>
    </>
  );
}
