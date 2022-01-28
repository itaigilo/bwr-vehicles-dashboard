import L from "leaflet";

const iconRadius = 18;
const iconProps = {
    iconSize: [iconRadius * 2, iconRadius * 2],
    iconAnchor: [iconRadius, iconRadius],
    popupAnchor: [0, -iconRadius]
};

// note: this can't be a React Component since doesn't support it
function getVehicleIcon(vehicleType, vehicleStatus) {
    const className = `map-icon ${vehicleStatus}`;
    // TODO: change to 'switch' for more types
    const iconUrl = vehicleType === 'tractor' ? require('./icons/tractor-icon.png') : require('./icons/drone-icon.png');
    return new L.Icon({className, iconUrl, ...iconProps});
}

export {getVehicleIcon};
