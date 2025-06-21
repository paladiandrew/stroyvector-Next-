'use client';

import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const cities = [
  { name: 'Москва', lat: 55.751244, lng: 37.618423 },
  { name: 'Калуга', lat: 54.506, lng: 36.251 },
  { name: 'Тула', lat: 54.196, lng: 37.617 },
  { name: 'Наро-Фоминск', lat: 55.383, lng: 36.733 },
  { name: 'Владимир', lat: 56.129, lng: 40.406 },
];

export default function MapLeaflet() {
  useEffect(() => {
    // Ensure window availability
    const map = L.map('geography-map', {
      center: [55.4, 38],
      zoom: 6,
      zoomControl: false,
      attributionControl: false,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }).addTo(map);

    const markerStyle: L.CircleMarkerOptions = {
      radius: 10,
      color: '#ff902f',
      fillColor: '#ff902f',
      fillOpacity: 1,
      weight: 2,
    };

    const ringStyle: L.CircleMarkerOptions = {
      radius: 14,
      color: '#ff902f',
      fillOpacity: 0,
      weight: 2,
    };

    cities.forEach((c) => {
      L.circleMarker([c.lat, c.lng], ringStyle).addTo(map);
      L.circleMarker([c.lat, c.lng], markerStyle)
        .bindTooltip(c.name, { permanent: false, direction: 'top' })
        .addTo(map);
    });

    return () => { map.remove(); };
  }, []);

  return <div id="geography-map" className="w-full h-[300px] lg:h-[400px] rounded-xl shadow-md" />;
} 