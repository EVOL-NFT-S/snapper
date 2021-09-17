const axios = require("axios");
const config = require("config");

axios.get(config.TokenTransferEvents).then((response) => {
    console.log(response.data);
});
