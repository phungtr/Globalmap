import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { fetchRoute } from "./DirectionsAPI";

const MapView = ({ start, end }) => {
  const mapRef = useRef(null);

    useEffect(() => {
      if (mapRef.current && mapRef.current._leaflet_id) {
        mapRef.current.remove();
      }

      const map = L.map("map").setView([21.0285, 105.8542], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);
      mapRef.current = map;

  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((pos) => {
          const { latitude, longitude } = pos.coords;
          const marker = L.marker([latitude, longitude]).addTo(map);
          marker.bindPopup("Vị trí của bạn").openPopup();
          map.setView([latitude, longitude], 14);
        });
      }

      if (start && end) {
        L.marker([start.lat, start.lng]).addTo(map);
        L.marker([end.lat, end.lng]).addTo(map);

        fetchRoute(start, end)
          .then((geometry) => {
            const coords = geometry.coordinates.map(([lng, lat]) => [lat, lng]);
            const routeLine = L.polyline(coords, { color: "blue" }).addTo(map);
            map.fitBounds(routeLine.getBounds());
          })
          .catch((err) => alert(err.message));
      }
    }, [start, end]);


  return <div id="map" style={{ height: "100vh", width: "100%" }}></div>;
};

export default MapView;
