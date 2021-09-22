const axios = require("axios");
const api = require("./api");
const config = require("./config");

const getAddresses = async () => {
    const addresses = new Set();

    await axios.get(api.GetAllERC20Tx(config.ADDRESS_TMC)).then((response) => {
        const { data } = response;

        for (const tx of data.result) {
            addresses.add(tx.from);
            addresses.add(tx.to);
        }
    });

    await axios.get(api.GetAllERC20Tx(config.ADDRESS_TME)).then((response) => {
        const { data } = response;

        for (const tx of data.result) {
            addresses.add(tx.from);
            addresses.add(tx.to);
        }
    });

    await axios.get(api.GetAllERC721Tx(config.ADDRESS_TMA)).then((response) => {
        const { data } = response;

        for (const tx of data.result) {
            addresses.add(tx.from);
            addresses.add(tx.to);
        }
    });

    return Array.from(addresses);
};

module.exports = {
    getAddresses,
};
