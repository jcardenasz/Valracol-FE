import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ.js';
import { fromLonLat } from 'ol/proj';
import { Point } from 'ol/geom';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Icon, Style } from 'ol/style';

const MapComponent: React.FC = () => {
    useEffect(() => {
        // Coordinates of Yopal, Colombia
        const coordinates = fromLonLat([-72.39550987683344, 5.3361664710329]);

        //const point = new Point(add(coordinates,[0,5]));
        const point = new Point(coordinates);
        const feature = new Feature(point);

        // Create a style with an icon
        const iconStyle = new Style({
            image: new Icon({
                src: '/location-pointer.png',
                scale: 0.046, // Adjust the scale as needed
            }),
        });

        feature.setStyle(iconStyle);

        // Initialize the map
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    }),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        features: [feature],
                    }),
                }),
            ],
            view: new View({
                center: coordinates,
                zoom: 15,
            }),
        });

        // Cleanup on component unmount
        return () => {
            map.setTarget(undefined);
        };
    }, []);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default MapComponent;