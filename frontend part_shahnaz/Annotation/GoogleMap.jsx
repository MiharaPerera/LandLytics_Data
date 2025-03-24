"use client";
import React, { useState, useCallback } from "react";
import {
  GoogleMap as GoogleMapComponent,
  useJsApiLoader,
  Marker,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "35px",
};

// Default center coordinates (San Francisco)
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const GoogleMap = ({ onLoad, onClick }) => {
  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "YOUR_API_KEY_HERE",
  });

  const handleLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds(defaultCenter);
      map.fitBounds(bounds);
      setMap(map);
      if (onLoad) onLoad(map);
    },
    [onLoad],
  );

  const handleUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleClick = useCallback(
    (event) => {
      if (onClick) {
        onClick({
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        });
      }
    },
    [onClick],
  );

  return isLoaded ? (
    <GoogleMapComponent
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={10}
      onLoad={handleLoad}
      onUnmount={handleUnmount}
      onClick={handleClick}
      options={{
        fullscreenControl: false,
        streetViewControl: false,
        mapTypeControl: true,
        zoomControl: true,
      }}
    >
      <Marker position={defaultCenter} />
    </GoogleMapComponent>
  ) : (
    <div
      style={{
        height: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
        borderRadius: "35px",
      }}
    >
      Loading Map...
    </div>
  );
};

export default GoogleMap;
