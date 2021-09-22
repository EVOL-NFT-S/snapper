const config = require("./config");

const GetERC20Tx = (contract, address) => {
    return `${config.API_URL}?module=account&action=tokentx&contractaddress=${contract}&address=${address}&page=1&offset=10000&sort=asc&apikey=${config.API_KEY}`;
};

const GetAllERC20Tx = (contract) => {
    return `${config.API_URL}?module=account&action=tokentx&contractaddress=${contract}&page=1&offset=10000&sort=asc&apikey=${config.API_KEY}`;
};

const GetERC721Tx = (contract, address) => {
    return `${config.API_URL}?module=account&action=tokennfttx&contractaddress=${contract}&address=${address}&page=1&offset=10000&sort=asc&apikey=${config.API_KEY}`;
};

const GetAllERC721Tx = (contract) => {
    return `${config.API_URL}?module=account&action=tokennfttx&contractaddress=${contract}&page=1&offset=10000&sort=asc&apikey=${config.API_KEY}`;
};

module.exports = {
    GetERC20Tx,
    GetAllERC20Tx,
    GetERC721Tx,
    GetAllERC721Tx,
};
