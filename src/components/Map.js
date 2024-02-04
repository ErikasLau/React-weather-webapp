import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = ({ coords }) => {
  // Custom map updater component
  function MapUpdater({ coords }) {
    const map = useMap();

    useEffect(() => {
      if (coords) {
        map.setView([coords.lat, coords.lon], map.getZoom());
      }
    }, [coords, map]);

    return null;
  }

  return (
    <div>
      <MapContainer
        center={[coords.lat, coords.lon]}
        zoom={10}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
        />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${process.env.REACT_APP_OWM_API_KEY}`}
          zIndex={1} // Ensure the overlay is above the base layer
        />
        <MapUpdater coords={coords} />
      </MapContainer>
    </div>
  );
};

export default Map;