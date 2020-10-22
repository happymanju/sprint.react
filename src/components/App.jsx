import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "../components/Navbar";
import AllPhotos from "../components/AllPhotos";
import SinglePhoto from "../components/SinglePhoto";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("AllPhotos");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();

  async function fun() {
    let test = await listObjects();
    test = test.map(x => x.Key);

    while (test.length > 0) {
      const spliced = test.slice(0, 10);
      const ph = spliced.map(async key => await getSingleObject(key));
      Promise.all(ph).then(bases => setPhotos(photos.concat(bases)));
      console.log(test.length);
    }
  }
  useEffect(() => {
    fun();
  }, []);
  //console.log(arr);

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
