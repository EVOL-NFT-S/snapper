/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
const { ethers } = require("ethers");
const BigNumber = ethers.BigNumber;

const scanTMAPool = async (
    poolId,
    stakingContract,
    addresses,
    tmcRewards,
    tmaStakingBalances
) => {
    await Promise.all(
        addresses.map(
            (address) =>
                new Promise(async (resolve, _reject) => {
                    try {
                        const staking = BigNumber.from(
                            await stakingContract.getUserInfoTamagIdSize(
                                poolId,
                                address
                            )
                        );
                        tmaStakingBalances[address] = tmaStakingBalances[
                            address
                        ]
                            ? tmaStakingBalances[address].add(staking)
                            : staking;

                        let reward = BigNumber.from(0);

                        for (let i = 0; i < staking.toNumber(); i++) {
                            const tamagId =
                                await stakingContract.getUserInfoTamagIdAtIndex(
                                    poolId,
                                    address,
                                    i
                                );
                            const pending =
                                await stakingContract.pendingTMCForTamag(
                                    poolId,
                                    address,
                                    tamagId.toNumber()
                                );
                            reward = reward.add(pending);
                        }

                        tmcRewards[address] = tmcRewards[address]
                            ? tmcRewards[address].add(reward)
                            : reward;
                        //console.log("TMA pool address")
                        resolve("success");
                    } catch (e) {
                        // reject("failure");
                        resolve("failure");
                    }
                })
        )
    );
    console.log("TMA pool");
};

const scanTMCPool = async (
    poolId,
    stakingContract,
    addresses,
    tmcRewards,
    tmcStakingBalances
) => {
    await Promise.all(
        addresses.map(
            (address) =>
                new Promise(async (resolve, _reject) => {
                    try {
                        const amount = BigNumber.from(
                            (
                                await stakingContract.getUserInfo(
                                    poolId,
                                    address
                                )
                            )[0]
                        );

                        const reward = await stakingContract.pendingTMC(
                            poolId,
                            address
                        );

                        tmcRewards[address] = tmcRewards[address]
                            ? tmcRewards[address].add(reward)
                            : reward;

                        tmcStakingBalances[address] = tmcStakingBalances[
                            address
                        ]
                            ? tmcStakingBalances[address].add(amount)
                            : amount;
                        //console.log("TMC pool address")
                        resolve("success");
                    } catch (e) {
                        // reject("failure");
                        resolve("failure");
                    }
                })
        )
    );
    console.log("TMC pool");
};

const scanTMEPool = async (
    poolId,
    stakingContract,
    addresses,
    tmcRewards,
    tmeStakingBalances
) => {
    await Promise.all(
        addresses.map(
            (address) =>
                new Promise(async (resolve, _reject) => {
                    try {
                        const amount = BigNumber.from(
                            (
                                await stakingContract.getUserInfo(
                                    poolId,
                                    address
                                )
                            )[0]
                        );

                        const reward = await stakingContract.pendingTMC(
                            poolId,
                            address
                        );

                        tmeStakingBalances[address] = tmeStakingBalances[
                            address
                        ]
                            ? tmeStakingBalances[address].add(amount)
                            : amount;
                        tmcRewards[address] = tmcRewards[address]
                            ? tmcRewards[address].add(reward)
                            : reward;
                        //console.log("TME pool address")
                        resolve("success");
                    } catch (e) {
                        // reject("failure");
                        resolve("failure");
                    }
                })
        )
    );
    console.log("TME pool");
};

const scanTMCTMEPool = async (
    poolId,
    stakingContract,
    addresses,
    tmcRewards,
    tmcStakingBalances,
    tmeStakingBalances,
    totalSupply,
    totalTmc,
    totalTme
) => {
    await Promise.all(
        addresses.map(
            (address) =>
                new Promise(async (resolve, _reject) => {
                    try {
                        const amount = BigNumber.from(
                            (
                                await stakingContract.getUserInfo(
                                    poolId,
                                    address
                                )
                            )[0]
                        );

                        const reward = await stakingContract.pendingTMC(
                            poolId,
                            address
                        );

                        const tmcAmount = amount.div(totalSupply).mul(totalTmc);
                        const tmeAmount = amount.div(totalSupply).mul(totalTme);

                        tmeStakingBalances[address] = tmeStakingBalances[
                            address
                        ]
                            ? tmeStakingBalances[address].add(tmeAmount)
                            : tmeAmount;

                        tmcStakingBalances[address] = tmcStakingBalances[
                            address
                        ]
                            ? tmcStakingBalances[address].add(tmcAmount)
                            : tmcAmount;

                        tmcRewards[address] = tmcRewards[address]
                            ? tmcRewards[address].add(reward)
                            : reward;
                        //console.log("TMC/TME pool address")
                        resolve("success");
                    } catch (e) {
                        // reject("failure");
                        resolve("failure");
                    }
                })
        )
    );
    console.log("TMC/TME pool");
};

module.exports = {
    scanTMAPool,
    scanTMCPool,
    scanTMEPool,
    scanTMCTMEPool,
};
