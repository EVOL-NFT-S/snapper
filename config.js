const dotenv = require("dotenv");

dotenv.config();

const API_KEY = process.env.API_KEY;

const API_URL = process.env.API_URL;

const ADDRESS_NIFTYGOTCHI_STORE = process.env.ADDRESS_NIFTYGOTCHI_STORE;
const ADDRESS_STAKING_POOL = process.env.ADDRESS_STAKING_POOL;
const ADDRESS_HATCHERY = process.env.ADDRESS_HATCHERY;
const ADDRESS_TMC = process.env.ADDRESS_TMC;
const ADDRESS_TME = process.env.ADDRESS_TME;
const ADDRESS_TMA = process.env.ADDRESS_TMA;

module.exports = {
    API_KEY,
    API_URL,
    ADDRESS_NIFTYGOTCHI_STORE,
    ADDRESS_STAKING_POOL,
    ADDRESS_HATCHERY,
    ADDRESS_TMC,
    ADDRESS_TME,
    ADDRESS_TMA,
};
