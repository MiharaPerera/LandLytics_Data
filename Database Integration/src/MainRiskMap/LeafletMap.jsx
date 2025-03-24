import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
import "leaflet.locatecontrol"; // Ensure this is correctly imported

const LeafletMap = () => {
  useEffect(() => {
    // Initialize the map
    const map = L.map("map", {
      zoomControl: true,
      maxZoom: 40,
      minZoom: 3
    }).setView([7.8731, 80.7718], 8);

    // Base map layers
    const osmLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
      maxZoom: 19
    });

    const googleHybridLayer = L.tileLayer("https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}", {
      attribution: "© Google",
      maxZoom: 20
    });

    const esriWorldTopoLayer = L.tileLayer("https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}", {
      attribution: "© ESRI",
      maxZoom: 20
    });

    // WMS Overlay for Sentinel-3 data
    const copernicusLayer = L.tileLayer.wms("https://view.eumetsat.int/geoserver/wms", {
      layers: "copernicus:daily_sentinel3ab_olci_l2_chl_fullres",
      format: "image/png",
      transparent: true,
      opacity: 1
    });

    // Add default base layer
    osmLayer.addTo(map);

    // Layer Control
    const baseLayers = {
      "OSM Standard": osmLayer,
      "Google Satellite Hybrid": googleHybridLayer,
      "ESRI World Topo": esriWorldTopoLayer
    };

    const overlayLayers = {
      "Copernicus Sentinel-3": copernicusLayer
    };

    L.control.layers(baseLayers, overlayLayers, { collapsed: false }).addTo(map);

    // Locate Control (with timeout to prevent load issues)
    setTimeout(() => {
      if (L.Control.Locate) {
        L.control.locate({ locateOptions: { maxZoom: 18 } }).addTo(map);
      } else {
        console.error("Locate control is not available.");
      }
    }, 500);

    // Feature Group for drawn shapes
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Add drawing controls
    const drawControl = new L.Control.Draw({
      draw: {
        polygon: true,
        polyline: false,
        rectangle: false,
        circle: false,
        marker: false,
        circlemarker: false
      },
      edit: {
        featureGroup: drawnItems
      }
    });

    map.addControl(drawControl);

    // Event listener for drawing
    map.on("draw:created", (e) => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
      console.log("Polygon coordinates:", layer.getLatLngs());
    });

    // Cleanup function
    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default LeafletMap;
