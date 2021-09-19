const config = require("./config");
const tmc = require("./tmc");
const tme = require("./tme");
const tma = require("./tma");

const transaction = require("./transaction");

// 1; TMC <> Staking Pool
/* transaction.printERC20Txs(
    config.ADDRESS_TMC,
    config.ADDRESS_STAKING_POOL,
    tmc.addresses
); */

// 2; TMC <> Hatchery
/* transaction.printERC20Txs(
    config.ADDRESS_TMC,
    config.ADDRESS_HATCHERY,
    tmc.addresses
); */

// 3; TME <> Staking Pool
/* transaction.printERC20Txs(
    config.ADDRESS_TME,
    config.ADDRESS_STAKING_POOL,
    tme.addresses
); */

// 4; TME <> Hatchery
/* transaction.printERC20Txs(
    config.ADDRESS_TME,
    config.ADDRESS_HATCHERY,
    tme.addresses
); */

// 5; TMA <> Staking Pool
transaction.printERC721Txs(
    config.ADDRESS_TMA,
    config.ADDRESS_STAKING_POOL,
    tma.addresses
);

// 6; TMA <> Hatchery
/* transaction.printERC721Txs(
    config.ADDRESS_TMA,
    config.ADDRESS_HATCHERY,
    tma.addresses
); */

// before 5; TMA all
// transaction.printAllERC721Txs(config.ADDRESS_TMA);
