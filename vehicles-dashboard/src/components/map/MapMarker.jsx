import {Marker, Popup} from 'react-leaflet';
import {getVehicleIcon} from './vehicle-icon';

function MapMarker({vehicle: v}) {
    return (
        <Marker key={v._id}
                position={[v.location.latitude, v.location.longitude]}
                icon={getVehicleIcon(v.type, v.status)}>
            <Popup>
                ID: {v._id}<br/>
                Type: {v.type}<br/>
                Status: {v.status}<br/>
                Location:<br/>
                &nbsp;&nbsp;Latitude: {v.location.latitude}<br/>
                &nbsp;&nbsp;Latitude: {v.location.longitude}<br/>
            </Popup>
        </Marker>
    );
}

export default MapMarker;
