import React, { useEffect, useState } from 'react';
import './App.css';

import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

  let[gallery, setGallery] = useState([]);

  // On load GET gallery images
  useEffect(() => {
    getGallery()
  },[])

  // GET function

  const getGallery = () => {
    axios.get('/gallery')
    .then(response => {
      setGallery(response.data)
    })
    .catch(err => {
      alert('error getting gallery images');
      console.log(err);
    })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
          <div>
            <GalleryList
              images={gallery} />
          </div>
      </div>
    );
}

export default App;
