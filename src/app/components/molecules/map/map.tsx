import React from 'react';

const MapComponent: React.FC = () => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    return (
        <div className="map-container">
            <iframe
                width="100%"
                height="450"
                style={{ border: '0', borderRadius: '8px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=5.336028614724344,-72.3954750525791`}
            />
        </div>
    );
};

export default MapComponent;