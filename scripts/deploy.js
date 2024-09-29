// import Hardhat to use it inside our script
const hre = require('hardhat');

// We define a variable with the name of our contract
const CONTRACT_NAME = 'ProjectNFT';

// The 3 parameters for our smart contract's constructor (CHANGE THESE to your own NFT name and description)
const NFT_NAME = 'Academy';
const NFT_DESCRIPTION = 'D_D Academy Basic NFT Collection';

// CHANGE THIS if you created your own images/JSONs:
const NFT_BASE_URI =
  'https://gateway.pinata.cloud/ipfs/QmSCNdaA5JBT5D6V5FbivfZonKjdsMPeZeTyTWzq1D3yrJ/';

// We define a function with all we want Hardhat to run
async function main() {
  // We get the contract factory from Hardhat
  const ContractFactory = await hre.ethers.getContractFactory(CONTRACT_NAME);

  // We deploy the contract (notice we pass 3 parameters that our contract's constructor needs)
  const contract = await ContractFactory.deploy(
    NFT_NAME,
    NFT_DESCRIPTION,
    NFT_BASE_URI,
  );

  // We wait for it to be deployed to the blockchain
  await contract.deployed();

  // We print the contract's address to the console
  console.log(`${CONTRACT_NAME} deployed to: ${contract.address}`);

  // --> ( We'll add more stuff here later ) <--
}

// We call the main function we created above (don't change this)
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })