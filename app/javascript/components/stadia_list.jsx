import React, { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
import { Link } from "react-router-dom"

// class StadiumsList extends React.Component {
//   render() {
//     return (
//       <div> Stadiums list rendered in react!</div>
//     )
//   }
// }
function renderStadiumsPage(body, onSearchTextChange) {
  return (
    <div className="bg-white p-8 rounded-md w-full">
      <div className="flex items-center justify-between pb-6">
        <div>
          <h2 className="text-4xl text-gray-600 font-semibold">Stadiums</h2>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex bg-gray-50 items-center p-2 rounded-md">
            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path 
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
            </svg> */}
            <input
              className="bg-gray-50 outline-none ml-1 block w"
              type="text"
              name=""
              id=""
              stadiumholder="search..."
              onChange={onSearchTextChange}
              />
          </div>
          <div className="lg:ml-40 ml-10 space-x-8">
              <Link to="/new-internet-speed">
                  <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Help Visitors</button>
              </Link>
              <Link to="/gallery">
                <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Gallery</button>

              </Link>
          </div>
        </div>
      </div>
      {/* Add NavBar code*/}
      
      {body}
    </div>

    
  )
}


export default function StadiaList() {

  const [loading, setLoading] = useState(true);
  const [loadedStadia, setLoadedStadia] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    // Hit the server and get the stadia list.
    const apiEndpoint = `/api/stadia?search_term=${searchTerm}`

    fetch(apiEndpoint)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setLoadedStadia(data["stadia"])
        setLoading(false)
      });
  }, [searchTerm])

   const onSearchTextChange = (e) =>  {
    console.log("onSearchTextChange was executed!")
    setLoading(true);
    setSearchTerm(e.target.value);
  }

  const loadingSection = (<div>Loading...</div>)
  
   
  const tableHeaderClass = "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
  const dataSection = (
		<div>
			<div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
				<div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className={tableHeaderClass}>Name</th>
                <th className={tableHeaderClass}>City</th>
                <th className={tableHeaderClass}>Capacity</th>
                {/* <th className={tableHeaderClass}>Description</th> */}
              </tr>
            </thead>
            <tbody>
            {loadedStadia.map((stadium, index) => {
                return (
                  <tr key={index}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">{stadium.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">{stadium.city}</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {stadium.capacity}
                      </p>
                    </td>
                    
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return renderStadiumsPage(loadingSection, onSearchTextChange)
  } else {
    return renderStadiumsPage(dataSection, onSearchTextChange)
  }
}


// import React, { useState, useEffect } from "react";


// Add some javascript to restadium the div where = "stadiums-list-container"
// with content rendered above.
