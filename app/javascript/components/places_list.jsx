import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';

function PlacesList() {
    const [loading, setLoading] = useState(true)
    const[loadedStadiums, setLoadedStadiums] = useState([])

    useEffect(()=>{
        const apiEndpoint = "api/fields"
        fetch (apiEndpoint)
        .then(res =>res.json())
        .then(data =>{
            // console.log(data["fields"])
            setLoadedStadiums(data["fields"])
            setLoading(false)
        })
    },[])
    
    const loadingSection = (<div>loading</div>) 
    const dataSection = loadedStadiums.map((stadium, index)=>

    <div key={index}>
        <table>
            <tr>
                <th>Name</th>
                <th>City</th>
                <th>Address</th>
                {/* <th>Recent Stadium Temperature</th>
                <th>Number of measurements</th> */}
            </tr>
            <tr>
                <td>{stadium.name}</td>
                <td>{stadium.city}</td>
                <td>{stadium.address}</td>
                {/* <td>{stadium.stadium_temperatures}</td>
                <td>{stadium.number_of_measurements}</td> */}
            </tr>
        </table>
    </div>
    )

    if (loading){
        return   loadingSection
        
    } else{
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