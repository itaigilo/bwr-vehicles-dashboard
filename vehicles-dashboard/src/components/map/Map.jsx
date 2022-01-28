import React, {useState, useEffect} from 'react';
import {MapContainer, TileLayer} from 'react-leaflet';
import MapMarker from "./MapMarker";
import './map.css';

import VehiclesService from '../../services/vehicles-service';

const POLLING_INTERVAL_MS = 3000;

const MAP_CENTER = [-20.2689666, -47.5191383]; // arbitrary center for this exercise

function Map() {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        let isMounted = true;

        function fetchData() {
            VehiclesService.fetchVehicles().then(data => {
                if (isMounted) setVehicles(data);
            });
        }

        fetchData(); // initial data fetching
        const intervalId = setInterval(fetchData, POLLING_INTERVAL_MS); // polling data

        return () => {
            isMounted = false;
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="map mt-3">
            <MapContainer center={MAP_CENTER} zoom={13} scrollWheelZoom={false} style={{height: 600}}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {vehicles.map(v => <MapMarker vehicle={v}/>)}
            </MapContainer>
        </div>
    );
}

export default Map;
