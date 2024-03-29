import React, {useState} from "react";
import ReactMapGL, {Marker, Popup} from "react-map-gl";
import airportData from "./data/Texas_Airports.geojson";
// import * as airportData from "./data/Texas_Airports.geojson";
// import './App.css';

export default function App() {
 const[viewport, setViewport] = useState({
  latitude: 31.9686,
  longitude: 99.9018,
  width: "100vw",
  height: "100vh",
  zoom: 10
 })
 const [selectedAirport, setSelectedAirport] = useState(null);
  
  return <div>
    <ReactMapGL 
    {...viewport}
    mapBoxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
    mapStyle = "mapbox://styles/mapbox/standard"
    onViewPortChange = {(viewport) => {setViewport(viewport);}}
    >

     {airportData.features.map(airport => (
          <Marker
            key={airport.properties.OBJECTID}
            latitude={airport.geometry.coordinates[1]}
            longitude={airport.geometry.coordinates[0]}
          >
          </Marker>
        ))}

        {selectedAirport ? (
          <Popup
            latitude={selectedAirport.geometry.coordinates[1]}
            longitude={selectedAirport.geometry.coordinates[0]}
            onClose={() => {
              setSelectedAirport(null);
            }}
          >
            <div>
              <h2>{selectedAirport.properties.ARPRT_NM}</h2>
              <p>{selectedAirport.properties.CNTY_NBR}</p>
            </div>
          </Popup>
        ) : null}
    </ReactMapGL>

  </div>;
}

// export default App;