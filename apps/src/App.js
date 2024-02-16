import React from 'react';
import ReactMapGL from "react-map-gl";
// import './App.css';

export default function App() {
 const[viewport, setViewport] = useState({
  latitude: 31.9686,
  longitude: 99.9018,
  width: "100vw",
  height: "100vh",
  zoom: 10
 })
  
  return <div>
    <ReactMapGL 
    {...viewport}
    mapBoxApiAccessToken = {process.env.REACT_APP_MAPBOX_TOKEN}
    onViewPortChange = {(viewport) => {setViewport(viewport);}}
    >
      markers here
    </ReactMapGL>

  </div>;
}

// export default App;