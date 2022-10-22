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

  const likeClick = (id) => {
    console.log('like was clicked');
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        console.log('like click PUT', response);
        getGallery();
      })
      .catch(err => {
        console.log('like click PUT error', err);
      })
  }


    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">🦕 🦟 🏝️ Jurassic Gallery 🌋 🐐 🦖</h1>
        </header>
          <div className="galleryContainer">
            <GalleryList
              images={gallery}
              likeClick={likeClick} />
          </div>
      </div>
    );
}

export default App;
