const VEHICLES_API_URL = 'http://localhost:9000/api/vehicles';

const VehiclesService = {
    fetchVehicles: () => {
        return fetch(VEHICLES_API_URL)
            .then(response => response.json())
    }
}

module.exports = VehiclesService;