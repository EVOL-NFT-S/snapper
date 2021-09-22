/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
const { ethers } = require("ethers");
const BigNumber = ethers.BigNumber;

const scanTMAPool = async (
    poolId,
    stakingContract,
    addresses,
    tmcStakingBalances,
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

                        const reward = BigNumber.from(0);

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
                                    tamagId
                                );
                            reward.add(pending);
                        }

                        tmcStakingBalances[address] = tmcStakingBalances[
                            address
                        ]
                            ? tmcStakingBalances[address].add(reward)
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

                        tmcStakingBalances[address] = tmcStakingBalances[
                            address
                        ]
                            ? tmcStakingBalances[address]
                                  .add(amount)
                                  .add(reward)
                            : amount.add(reward);
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
    tmcStakingBalances,
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
                        tmcStakingBalances[address] = tmcStakingBalances[
                            address
                        ]
                            ? tmcStakingBalances[address].add(reward)
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
                            ? tmcStakingBalances[address]
                                  .add(tmcAmount)
                                  .add(reward)
                            : tmcAmount.add(reward);
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
