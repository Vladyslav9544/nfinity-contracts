// npx hardhat run scripts/deployNfinity.ts --network goerli
// npx hardhat verify <address> <constructor parameters> --network goerli

import { ethers } from "hardhat";

async function main() {
  const nfinityContract = await ethers.getContractFactory("Nfinity");
  const nfinity = await nfinityContract.deploy("NFINITY");

  console.log("Nfinity deployed to:", nfinity.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
