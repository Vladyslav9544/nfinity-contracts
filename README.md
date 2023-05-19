# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

node v16

1. yarn install

2. change `.env-templqte` to `.env` and input your wallet private key to PRIVATE_KEY.

PRIVATE_KEY = "00112312....234234234"

3. Deploy contract

```
npx hardhat run scripts/deployNfinity.ts --network goerli
```

after you run this command on terminal, you can see the contract address int his form.

```shell
Nfinity deployed to: 0xE717CeB1c823e25250685be2E77F623f501Bb0d8
```

4. Verify contract

```
npx hardhat verify <address> NFINITY --network goerli
```

Replace the address with the contract address you get from Step3 and run this command.