import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function NewImage() {

  const [images, setImages] = useState([])
  const [latestImage, setLatestImage] = useState(null)
  const [stadiumName, setStadiumName] = useState("")
  const [stadiumCity, setStadiumCity] = useState("")

  useEffect(() => {
    // Define a new event handler for the form submission event
    const handleFormSubmit = (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Check if an image has been selected
      if (latestImage) {
        // Create a new array of images by adding the latest selected image
        // to the current array of images
        const newImages = [...images, latestImage];
        setImages(newImages);
  
        // Send a POST request to the server
        const apiEndpoint = `/api/new-image`;
        const data = {
          "image_urls": newImages,
          "stadium_name": stadiumName,
          "stadium_city": stadiumCity
        };
        fetch(apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            // Check if the request was successful
            if (response.ok) {
              // Parse the response data as JSON
              console.log( response.json());
            } else {
              // Throw an error if the request was not successful
              throw new Error('Something went wrong!');
            }
          })
          .then((responseData) => {
            // This callback will be executed when the response data has been
            // successfully parsed as JSON. You can use the response data here
            // to update the component state or perform other actions.
            console.log(responseData);
          })
          .catch((error) => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
          });
      }
    };
  
    // Add the event listener to the form element
    // const form = document.getElementById('new-image-form');
    // form.addEventListener('submit', handleFormSubmit);
  
    // Remove the event listener when the component is unmounted
    return () => form.removeEventListener('submit', handleFormSubmit);
  }, [images, latestImage, stadiumName, stadiumCity]);
  

  return (
    // <div> Stadiumholder page to enter internet speed</div>
    <form id="new-image-form" className="bg-white p-8 rounded-md w-full">
      <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-4xl text-gray-600 font-semibold">Add Images</h2>
        </div>
      </div>

      <div className="md:ml-2 w-96">
        <label className="block mb-2 text-sm font-bold text-gray-700">
          Which Stadium is this?
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="stadiumName"
          type="text"
          placeholder="Stadium Name"
          onChange={(e) => setStadiumName(e.target.value)}

        />
      </div>
      <div className="md:ml-2 mt-2 w-96">
        <label className="block mb-2 text-sm font-bold text-gray-700" for="city">
          City
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="text"
          placeholder="City"
          onChange={(e) => setStadiumCity(e.target.value)}
        />
      </div>

      <div className="md:ml-2 mt-2 w-96">
        <label className="block mb-2 text-sm font-bold text-gray-700" for="city">
          Add to the world cup gallery
        </label>
        <input
          className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          id="city"
          type="file"
          accept="image/*"
          placeholder="Moments"
          // Using files[0] in the onChange handler ensures that the latestImage state variable 
          // is set to the selected file, rather than an array of selected files.
          onChange={(e) => setLatestImage(e.target.files[0])}
        />
      </div>

      <div className="md:ml-2 mt-4 w-96 text-center">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          type="submit"
          onClick={handleFormSubmit}
        
        >
          Post
        </button>
      </div>
    </div>
    </form>
  )
}