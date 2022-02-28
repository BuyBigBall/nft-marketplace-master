import {ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS, 
        ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS, 
        ERC721_LENDING_CONTACT_ADDRESS} from "../src/config";


const NFTCollection = artifacts.require("NFTCollection");
const NFTMarketplace = artifacts.require("NFTMarketplace");
const ERC721Lending = artifacts.require("ERC721Lending");

module.exports = async function (deployer) {
  await deployer.deploy(NFTCollection);

  const deployedNFT =  await NFTCollection.deployed();
  const NFTAddress = deployedNFT.address;
  await deployer.deploy(NFTMarketplace, NFTAddress);

  
  await deployer.deploy(ERC721Lending);
};