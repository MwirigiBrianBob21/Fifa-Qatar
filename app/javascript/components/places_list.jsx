import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'


function PlacesList(){
    const [loading, setLoading] = useState(true)
    const [loadedPlaces, setLoadedPlaces] = useState([])

   return (
    <div>Loading...</div>

    
   )
}

class PlaceList extends React.Component {
    render() {
        return (
            <div> Places list rendered in react</div>
        )
    }
}

const placeList = ReactDOM.createRoot(document.getElementById("places-list-container"));
placeList.render(<PlaceList />)