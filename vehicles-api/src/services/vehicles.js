const VEHICLE_TYPE = {
    tractor: 'tractor',
    drone: 'drone'
};

const VEHICLE_STATUS = {
    onMission: 'on-mission',
    unreachable: 'unreachable',
    idle: 'idle'
};

const BASE_LATITUDE = -20.27;
const BASE_LONGITUDE = -47.52;

let i = 0;

function getVehicles() {
    i = i < 5 ? i + 1 : 0; // simulate movement

    // mocking (dynamic) data
    return [
        {
            _id: "1d7df7a80139c9c0312b1121",
            type: VEHICLE_TYPE.tractor,
            createdAt: "2020-03-11T17:33:53.119Z",
            updatedAt: "2020-03-11T18:33:53.119Z",
            status: VEHICLE_STATUS.onMission,
            location: {
                latitude: BASE_LATITUDE + 0.005 * i,
                longitude: BASE_LONGITUDE + 0.005 * i,
                updatedAt: "2019-09-15T20:14:02.877Z"
            }
        },
        {
            _id: "1d7df7a80139c9c0312b1122",
            type: VEHICLE_TYPE.tractor,
            createdAt: "2020-03-11T17:33:53.119Z",
            updatedAt: "2020-03-11T18:33:53.119Z",
            status: VEHICLE_STATUS.idle,
            location: {
                latitude: BASE_LATITUDE + 0.03,
                longitude: BASE_LONGITUDE - 0.01,
                updatedAt: "2019-09-15T20:14:02.877Z"
            }
        },
        {
            _id: "1d7df7a80139c9c0312b1123",
            type: VEHICLE_TYPE.tractor,
            createdAt: "2020-03-11T17:33:53.119Z",
            updatedAt: "2020-03-11T18:33:53.119Z",
            status: VEHICLE_STATUS.unreachable,
            location: {
                latitude: BASE_LATITUDE - 0.01,
                longitude: BASE_LONGITUDE + 0.04,
                updatedAt: "2019-09-15T20:14:02.877Z"
            }
        },
        {
            _id: "1d7df7a80139c9c0312b1124",
            type: VEHICLE_TYPE.drone,
            createdAt: "2020-03-11T17:33:53.119Z",
            updatedAt: "2020-03-11T18:33:53.119Z",
            status: VEHICLE_STATUS.onMission,
            location: {
                latitude: BASE_LATITUDE - 0.03,
                longitude: BASE_LONGITUDE - 0.01 - (0.005 * i),
                updatedAt: "2019-09-15T20:14:02.877Z"
            }
        }
    ];
}

module.exports = {getVehicles};
