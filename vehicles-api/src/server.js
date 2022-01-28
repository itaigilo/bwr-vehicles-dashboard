const express = require('express');
const cors = require("cors");

const {getVehicles} = require("./services/vehicles");

const app = express();

app.use(cors());
app.options('*', cors());

const PORT = 9000;

app.get('/api/vehicles', (req, res) => res.send(getVehicles()))

app.listen(PORT, () => console.log(`Vehicles API listening on port ${PORT}`));
