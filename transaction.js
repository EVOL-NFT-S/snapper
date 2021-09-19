const axios = require("axios");
const api = require("./api");

const printERC20Txs = (contract, address, addresses) => {
    const balances = {};

    axios.get(api.GetERC20Tx(contract, address)).then((response) => {
        // console.log(response.data);
        const { data } = response;

        for (const tx of data.result) {
            if (tx.to === address) {
                const balance = balances[tx.from]
                    ? balances[tx.from]
                    : BigInt(0);
                balances[tx.from] = balance + BigInt(tx.value);
            } else if (tx.from === address) {
                const balance = balances[tx.to] ? balances[tx.to] : BigInt(0);
                balances[tx.to] = balance - BigInt(tx.value);
            }
        }

        for (const holder of addresses) {
            console.log(`${holder} ${balances[holder] ? balances[holder] : 0}`);
        }

        console.log("---");

        for (const pair of Object.entries(balances)) {
            if (!addresses.includes(pair[0])) {
                console.log(`${pair[0]} ${pair[1] ? pair[1] : 0}`);
            }
        }
    });
};

const printERC721Txs = (contract, address, addresses) => {
    const nftIds = {};
    const balances = {};

    axios.get(api.GetERC721Tx(contract, address)).then((response) => {
        // console.log(response.data);
        const { data } = response;

        for (const tx of data.result) {
            if (tx.to === address) {
                nftIds[tx.from] = nftIds[tx.from] ? nftIds[tx.from] : [];
                nftIds[tx.from].push(tx.tokenID);
                balances[tx.from] = balances[tx.from]
                    ? balances[tx.from] + 1
                    : 1;
            } else if (tx.from === address) {
                nftIds[tx.to] = nftIds[tx.to] ? nftIds[tx.to] : [];
                nftIds[tx.to].push(-tx.tokenID);
                balances[tx.to] = balances[tx.to] ? balances[tx.to] - 1 : -1;
            }
        }

        for (const holder of addresses) {
            console.log(
                `${holder} ${balances[holder] ? balances[holder] : 0} ${
                    nftIds[holder] ? nftIds[holder] : "-"
                }`
            );
        }

        console.log("---");

        for (const pair of Object.entries(nftIds)) {
            if (!addresses.includes(pair[0])) {
                console.log(
                    `${pair[0]} ${balances[pair[0]]} ${pair[1] ? pair[1] : "-"}`
                );
            }
        }
    });
};

const printAllERC721Txs = (contract) => {
    const nftIds = {};
    const balances = {};

    axios.get(api.GetAllERC721Tx(contract)).then((response) => {
        const { data } = response;

        for (const tx of data.result) {
            nftIds[tx.from] = nftIds[tx.from] ? nftIds[tx.from] : [];
            nftIds[tx.from].push(-tx.tokenID);
            balances[tx.from] = balances[tx.from] ? balances[tx.from] - 1 : -1;
            nftIds[tx.to] = nftIds[tx.to] ? nftIds[tx.to] : [];
            nftIds[tx.to].push(tx.tokenID);
            balances[tx.to] = balances[tx.to] ? balances[tx.to] + 1 : 1;
        }

        for (const pair of Object.entries(nftIds)) {
            console.log(
                `${pair[0]} ${balances[pair[0]]} ${pair[1] ? pair[1] : "-"}`
            );
        }
    });
};

module.exports = {
    printERC20Txs,
    printERC721Txs,
    printAllERC721Txs,
};
