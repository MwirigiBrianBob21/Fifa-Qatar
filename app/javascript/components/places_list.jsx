import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Table } from 'react-bootstrap';


function PlacesList() {
    const [loading, setLoading] = useState(true)
    const [loadedStadiums, setLoadedStadiums] = useState([])

    useEffect(() => {
        const apiEndpoint = "api/fields"
        fetch(apiEndpoint)
            .then(res => res.json())
            .then(data => {
                // console.log(data["fields"])
                setLoadedStadiums(data["fields"])
                setLoading(false)
            })
    }, [])

    const loadingSection = (<div>loading</div>)
    const dataSection =


    <Table
    striped
    bordered
    hover
    className="bg-dark text-light w-100 mt-4"
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
             <thead className="thead-dark text-light font-weight-bold text-center">
  <tr>
    <th>Name</th>
    <th>City</th>
    <th>Address</th>
  </tr>
</thead>
            <tbody>
                {loadedStadiums.map((stadium, index) => {

                    return (
                        <tr key={index}>
                            <td>{stadium.name}</td>
                            <td>{stadium.city}</td>
                            <td>{stadium.address}</td>

                        </tr>)
                })}
            </tbody>

        </Table>



    if (loading) {
        return loadingSection

    } else {
        return dataSection
    }


}

// export default PlacesList

// class PlaceList extends React.Component {
//     render() {
//         return (
//             <div> Places list rendered in react</div>
//         )
//     }
// }

const placesList = ReactDOM.createRoot(document.getElementById("places-list-container"));
placesList.render(<PlacesList />)