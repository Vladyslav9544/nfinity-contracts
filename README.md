# Nfinity contract Readme

node v16

1. Initialize

```
yarn install
```


2. Compile

```
yarn compile
```


3. change `.env-templqte` to `.env` and input your wallet private key to PRIVATE_KEY.

PRIVATE_KEY = "00112312....234234234"


4. Deploy contract

```
npx hardhat run scripts/deployNfinity.ts --network goerli
```

after you run this command on terminal, you can see the contract address int his form.

`Nfinity deployed to: 0xE717CeB1c823e25250685be2E77F623f501Bb0d8`


5. Verify contract

```
npx hardhat verify <address> NFINITY --network goerli
```

Replace the address with the contract address you get from Step3 and run this command.