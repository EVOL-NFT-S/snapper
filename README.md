# Utility functions for NiftyGotchi

Problem: How to take snapshots of the ERC20 token, ERC721 token, and the staking contract?

1. \[Trivial\] Using web3.js or ethers.js

Scan events to get token holders and call the smart contract to get balances.

2. \[3rd-party Tool\] Using [Token Snapshot Tool](https://github.com/OpenFuturePlatform/token-snapshot-tool)

Good but slow. Getting balances on the staking contract? Not sure.

3. \[3rd-party Service\] Using [Etherscan](https://etherscan.io/)

Etherscan shows the list of holders, e.g. https://etherscan.io/token/0x219351f2baec497a42416ba170a9b09696bf9e2e#balances
Unfortunately, this list cannot be obtained using Etherscan Developer APIs, at least for now.
So for now, let's export the holders list as a CSV file and use that.

Still for ERC721 tokens, `Export as CSV` option doesn't exist, so in this case should scan all internal transactions.

4. \[3rd-party Service\] Using [TheGraph](https://thegraph.com/)

Challenging, not yet tried.

## How to Run

### Install

`npm install`

### Run

-   `npm start`
    Run index.js

-   `node app-light.js`

-   `node app.js`
