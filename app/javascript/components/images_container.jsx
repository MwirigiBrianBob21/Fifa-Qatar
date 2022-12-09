import React, { useState, useEffect } from 'react';

const ImagesContainer = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // make a GET request to the /api/images endpoint
    fetch('/api/images')
      .then(response => response.json())
      .then(data => setImages(data));
  }, []);

  return (
    <div>
      {images.map(image => (
        <div key={image.id}>
          <img src={image.url} alt={image.description} />
          <p>{image.description}</p>
          <p>Stadium Name: {image.stadium_name}</p>
        </div>
      ))}
    </div>
  );
};

export default ImagesContainer;
