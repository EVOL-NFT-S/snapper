const dotenv = require("dotenv");

dotenv.config();

export const API_KEY = process.env.API_KEY;

export const API_URL = process.env.API_URL;

export const ADDRESS_NIFTYGOTCHI_STORE =
    "0xF13E9887C6FB528b5C00960116dBfE8DB28534A7";

export const TokenTransferEvents = `${API_URL}?module=account&action=tokentx&contractaddress=${ADDRESS_NIFTYGOTCHI_STORE}&page=1&offset=0&sort=asc&apikey=${API_KEY}`;
