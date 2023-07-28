import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch'



const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState('');
  

  useEffect(() => {
    fetchGifs();
  }, [query]);

  const fetchGifs = () => {
    const API_KEY = '96GIiVoNnxz0K20hBvj5soJBbk8b80Hg';
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}&rating=g`)
      .then((response) => response.json())
      .then((data) => setGifs(data.data.slice(0,5)))
      
  };

  const handleSearchSubmit =(searchQuery) => {
    setQuery(searchQuery);
  }


  return (
    <div>
      <GifSearch onSubmit={handleSearchSubmit} />
      <GifList gifs={gifs} />
    </div>
  );
};

export default GifListContainer;




// useEffect(() => {
//   fetch(
//     `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=96GIiVoNnxz0K20hBvj5soJBbk8b80Hg`
//   )
//     .then((res) => res.json())
//     .then((GifData) => setGifData(GifData.data.slice(0, 3)));
// }, []);