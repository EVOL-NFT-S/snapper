const { ethers } = require("ethers");
const BigNumber = ethers.BigNumber;
const { formatUnits } = require("ethers/lib/utils");

const config = require("./config");
const abi = require("./abi");
const staking = require("./staking");

const tmc = require("./tmc");
const tme = require("./tme");
const tma = require("./tma");

const provider = new ethers.providers.JsonRpcProvider(config.INFURA_ENDPOINT);

const stakingContract = new ethers.Contract(
    config.ADDRESS_STAKING_POOL,
    abi.ABI_STAKING_POOL,
    provider
);

const tmcContract = new ethers.Contract(
    config.ADDRESS_TMC,
    abi.ABI_TMC,
    provider
);

const tmeContract = new ethers.Contract(
    config.ADDRESS_TME,
    abi.ABI_TME,
    provider
);

const addressSet = new Set(
    tma.addresses.concat(tmc.addresses).concat(tme.addresses)
);
const addresses = Array.from(addressSet);

const tmaStakingBalances = {};
const tmcStakingBalances = {};
const tmeStakingBalances = {};
const tmcRewards = {};

const app = async () => {
    const poolIds = [0, 1, 2, 3, 4, 5, 6];
    const pools = await Promise.all(
        poolIds.map((id) => stakingContract.getPool(id))
    );

    for (let idx = 0; idx < pools.length; idx++) {
        const pool = pools[idx];
        const lpToken = pool[0];

        if (lpToken === config.ADDRESS_NULL) {
            await staking.scanTMAPool(
                idx,
                stakingContract,
                addresses,
                tmcRewards,
                tmaStakingBalances
            );
        } else {
            if (lpToken === config.ADDRESS_TMC) {
                await staking.scanTMCPool(
                    idx,
                    stakingContract,
                    addresses,
                    tmcRewards,
                    tmcStakingBalances
                );
            } else if (lpToken === config.ADDRESS_TME) {
                await staking.scanTMEPool(
                    idx,
                    stakingContract,
                    addresses,
                    tmcRewards,
                    tmeStakingBalances
                );
            } else {
                const poolContract = new ethers.Contract(
                    lpToken,
                    abi.ABI_UNIV2_PAIR,
                    provider
                );

                const totalSupply = BigNumber.from(
                    await poolContract.totalSupply()
                );

                const totalTmc = BigNumber.from(
                    await tmcContract.balanceOf(lpToken)
                );
                const totalTme = BigNumber.from(
                    await tmeContract.balanceOf(lpToken)
                );

                await staking.scanTMCTMEPool(
                    idx,
                    stakingContract,
                    addresses,
                    tmcRewards,
                    tmcStakingBalances,
                    tmeStakingBalances,
                    totalSupply,
                    totalTmc,
                    totalTme
                );
            }
        }

        console.log(`pool ${idx}`);
    }

    console.log("finished");

    addresses.forEach((address) => {
        if (
            BigNumber.from(
                tmaStakingBalances[address] ? tmaStakingBalances[address] : 0
            )
                .add(
                    tmcStakingBalances[address]
                        ? tmcStakingBalances[address]
                        : 0
                )
                .add(
                    tmeStakingBalances[address]
                        ? tmeStakingBalances[address]
                        : 0
                )
                .add(tmcRewards[address] ? tmcRewards[address] : 0)
                .gt(0)
        )
            console.log(
                `${address} ${
                    tmcStakingBalances[address]
                        ? formatUnits(tmcStakingBalances[address], 18)
                        : 0
                } ${
                    tmeStakingBalances[address]
                        ? formatUnits(tmeStakingBalances[address], 18)
                        : 0
                } ${
                    tmaStakingBalances[address]
                        ? tmaStakingBalances[address]
                        : 0
                } ${
                    tmcRewards[address]
                        ? formatUnits(tmcRewards[address], 18)
                        : 0
                }`
            );
    });
};

app();
