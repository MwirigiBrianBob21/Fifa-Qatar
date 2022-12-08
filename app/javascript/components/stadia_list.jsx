import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// class StadiumsList extends React.Component {
//   render() {
//     return (
//       <div> Places list rendered in react!</div>
//     )
//   }
// }

function StadiaList() {

  const [loading, setLoading] = useState(true);
  const [loadedStadia, setLoadedStadia] = useState([]);

  useEffect(() => {
    // Hit the server and get the stadia list.
    const apiEndpoint = "/api/stadia"
    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoadedStadia(data["stadia"])
        setLoading(false)
      });
  }, [])

  const loadingSection = (<div>Loading...</div>)
  // console.log(loadingSection);
  const dataSection = loadedStadia.map((stadium, index) =>



    <div key={index}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Capacity</th>
          </tr>
        </thead>

        <tbody>
        <tr>
          <td>{stadium.name}</td>
          <td>{stadium.city}</td>
          <td>{stadium.capacity}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )


  if (loading) {
    return loadingSection
  } else {
    return dataSection
  }
}
// Add some javascript to replace the div where = "places-list-container"
// with content rendered above.
const placesList = ReactDOM.createRoot(document.getElementById("stadiums-container"));
placesList.render(<StadiaList />);