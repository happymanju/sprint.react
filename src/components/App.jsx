import React, { useState } from "react";
import "../styles/styles.css";
import Navbar from "../components/Navbar";
import AllPhotos from "../components/AllPhotos";
import SinglePhoto from "../components/SinglePhoto";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();

  async function setPhotosArray() {
    const arr = await listObjects();
    //for(const keyObj of arr) setPhotos([...photos, getSingleObject(keyObj.Key)]);
    console.log(arr);
  }
  setPhotosArray();

  return (
    <>
      <div className="app">
        <h1>Mike-TonyGram</h1>
        <Navbar
          setCurrentView={setCurrentView}
          setPhotos={setPhotos}
          photos={photos}
        />
        <h3>{currentView}</h3>
        {currentView === "AllPhotos" ? (
          <AllPhotos
            photos={photos}
            setCurrentView={setCurrentView}
            setSelectedPhoto={setSelectedPhoto}
          />
        ) : (
          <SinglePhoto selectedPhoto={photos[selectedPhoto]} />
        )}
      </div>
    </>
  );
}
