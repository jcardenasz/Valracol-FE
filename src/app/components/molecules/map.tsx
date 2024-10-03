"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, LatLngTuple } from 'leaflet';

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface MapProps {
    posix: LatLngExpression | LatLngTuple;
    zoom?: number;
}

const defaults = {
    zoom: 16,
};

const Map: React.FC<MapProps> = ({ posix, zoom = defaults.zoom }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <MapContainer
            center={posix}
            zoom={zoom}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={posix} draggable={false}>
                <Popup>Valracol, Yopal</Popup>
            </Marker>
        </MapContainer>
    );
};

export default dynamic(() => Promise.resolve(Map), { ssr: false });