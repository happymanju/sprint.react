import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import Navbar from "../components/Navbar";
import AllPhotos from "../components/AllPhotos";
import SinglePhoto from "../components/SinglePhoto";
import Loader from "../components/Loader";
import { listObjects, getSingleObject } from "../utils/index";

export default function App() {
  const [currentView, setCurrentView] = useState("Loading");
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState();

  async function fetchPhotos() {
    let fetched = await listObjects();
    fetched = fetched.map(x => x.Key);
    const photo64 = fetched.map(async key => await getSingleObject(key));
    Promise.all(photo64).then(bases => {
      setPhotos(bases);
      setCurrentView("AllPhotos");
    });
    //     WARNING
    //     comment out line 19, comment in line 26/28 and remove MaxKeys in
    //     utile/index.js to render all pictures,
    //     WARNING
    // //
    // for(let i = 0; i < fetched.length; i+=10){
    // Promise.all(photo64.slice(0,i)).then(async bases => await setPhotos(photos.concat(bases)));
    // }
  }

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <>
      <div className="app">
        <Navbar
          setCurrentView={setCurrentView}
          setPhotos={setPhotos}
          photos={photos}
        />
        {currentView === "Loading" && (
          <>
            <Loader />
          </>
        )}
        {currentView === "AllPhotos" && (
          <AllPhotos
            photos={photos}
            setCurrentView={setCurrentView}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
        {currentView === "SinglePhoto" && (
          <SinglePhoto selectedPhoto={photos[selectedPhoto]} />
        )}
      </div>
    </>
  );
}
