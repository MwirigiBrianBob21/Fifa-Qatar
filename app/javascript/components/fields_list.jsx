import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
// import { Table } from 'react-bootstrap';



function renderFieldsPage(body, onSearchTextChange) {
    return (
        <div className="bg-white p-8 rounded-md w-full">
            <div className="flex items-center justify-between pb-6">
                <div>
                    <h2 className="text-4xl text-gray-600 font-semibold">FifaQatar</h2>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                />
                        </svg>
                        <input className="bg-gray-50 outline-none ml-1 block w" type="text" name="" id="" placeholder="search..." onChange={onSearchTextChange}/>
                    </div>
                    <div className="lg:ml-40 ml-10 space-x-8">
                        <button className="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">World Cup Gallery</button>
                    </div>
                </div>
            </div>
            {body}
        </div>
    )
}

function FieldsList() {
    // State as: A minimum set of parameters that fully represents
    // what you want to render on the screen.
    // showLoading: Boolean
    // loadedFields: [] => gets filled
    const [loading, setLoading] = useState(true);
    const [loadedFields, setLoadedFields] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        // Hit the server and get the fields list.
        const apiEndpoint = `/api/fields?search_input=${searchInput}`
        fetch(apiEndpoint)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setLoadedFields(data["fields"])
                setLoading(false)
            });
        }, [searchInput])

        const onSearchTextChange = (e) =>  {
        //   console.log("onSearchTextChange was executed!")
          setLoading(true);
          setSearchInput(e.target.value);
        }

    const loadingSection = (<div>Welcome to Qatar</div>)

    const tableHeaderClass = "px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
    const dataSection = (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    <table className="min-w-full leading-normal">
                        <thead>
                            <tr>
                                <th className={tableHeaderClass}></th>
                                <th className={tableHeaderClass}>Name</th>
                                <th className={tableHeaderClass}>City</th>
                                <th className={tableHeaderClass}>Address</th>

                                <th className={tableHeaderClass}>Capacity</th>
                                <th className={tableHeaderClass}>Temperatures</th>

                            </tr>

                        </thead>
                        <tbody>
                            {loadedFields.map((place, index) => {
                                return (


                                    <tr key={index}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <img src={place.imageUrl} alt={`A photo of ${place.name}`} />
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex items-center">
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-no-wrap">{place.name}</p>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{place.city}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {place.address}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {place.capacity}
                                            </p>
                                        </td>

                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {place.recent_stadium_temperatures}
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
        // return loadingSection
        return renderFieldsPage(loadingSection, onSearchTextChange)
    } else {
        // return dataSection
        return renderFieldsPage(dataSection, onSearchTextChange)
    }
}
const fieldsList = ReactDOM.createRoot(document.getElementById("page-places"));
fieldsList.render(<FieldsList />);