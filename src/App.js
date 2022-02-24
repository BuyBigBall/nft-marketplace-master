import React, { useContext, useState, useEffect } from 'react';

import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS
    } from './config';
import NFTCOLLECTION_ABI from './imported_abis/NFTCollection';
import NFT_MARKETPLACE_CONTRACT from './imported_abis/NFTMarketplace';



import ConnectBar from './components/connect-bar';
import { injectedNetworkChainIds } from './components/connectors';
import Main from './components/Content/Main';
import Navbar from './components/Layout/Navbar';


import Web3Context from './store/web3-context';
import CollectionContext from './store/collection-context';
import MarketplaceContext from './store/marketplace-context'


import { useWeb3React } from '@web3-react/core';
import Swal from 'sweetalert2';
import { Contract } from '@ethersproject/contracts';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { ethers } from 'ethers';



import Web3 from 'web3';
// Web 3 connection
const web3 = window.ethereum ? new Web3(window.ethereum) : null; 

//import web3 from './connection/web3';
// // import ERC20Loan from './abis/PersonalLoanNFTCollateral.json';

const App = () => {
  const { active, account, library, activate } = useWeb3React();
  const [conn, setConn] = useState(false);
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);

  useEffect(() => {
    (async () => {
      try {
        await activate(injectedNetworkChainIds);
      } catch(ex) {
        console.log(ex);
      }
    })();

  }, []);

  
  useEffect(() => {

    // Check if the user has Metamask active
    if(!web3) {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      return;
    }
    if(active)
      setConn(true);
    else
      setConn(false);
  });


  useEffect(() => {    
    // Function to fetch all the blockchain data
    const loadBlockchainData = async() => {
      // Request accounts acccess if needed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });  
      } catch(error) {
        console.error(error);
      }
      
      // Load account
      // const account = await web3Ctx.loadAccount(web3);

      // Load Network ID
      // const networkId = await web3Ctx.loadNetworkId(web3);
      const networkId = await web3.eth.net.getId();
      
      
      
      if(library)
      {
        // console.log("connnected networkId : " + networkId);
        // console.log("account : "); console.log(account);
        // console.log(library.getSigner);


        // Load Contracts      
        // /*
        // const nftDeployedNetwork = NFTCOLLECTION_ABI.networks[networkId];
        //const nftContract = collectionCtx.loadContract(web3, NFTCollection, nftDeployedNetwork);
        // const nftContract = new web3.eth.Contract(NFTCOLLECTION_ABI, ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS);
        // */
        
        const nftContract_1 = new web3.eth.Contract(
            NFTCOLLECTION_ABI, 
            ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS);

        
        // /*
        const nftContract = new Contract(
                ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS, 
                NFTCOLLECTION_ABI, 
                library).connect(library.getSigner(account));
        // */
        if(nftContract) {        

          console.log(nftContract);
          // // Load total Supply
          // const totalSupply = await collectionCtx.loadTotalSupply(nftContract);
          const totalSupply = nftContract.totalSupply();

          //const totalSupply = await nftContract_1.methods.totalSupply();
          //console.log("totalSupply : ");console.log( totalSupply); return;

          // Load Collection
          collectionCtx.loadCollection(nftContract, totalSupply, account);       
          // //console.log("collectionCtx.collection.length = " + collectionCtx.collection.length);

          // Event subscription
          nftContract_1.events.Transfer()
          .on('data', (event) => {
            collectionCtx.updateCollection(nftContract, event.returnValues.tokenId, event.returnValues.to);
            collectionCtx.setNftIsLoading(false);
          })
          .on('error', (error) => {
            console.log(error);
          });
          
        } else {
          window.alert('NFTCollection contract not deployed to detected network.')
        }
      }
      // console.log("mktContract : "); console.log(mktContract);

      if(library)
      {
        
        const mktContract = new Contract(
          ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS, 
          NFT_MARKETPLACE_CONTRACT, 
          library).connect(library.getSigner(account));

        const mktContract_1 = new web3.eth.Contract(
          NFT_MARKETPLACE_CONTRACT, 
          ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS);
        // console.log("mktContract: "); console.log(mktContract);
        
        if(mktContract) {
          // // Load offer count
          const offerCount = await marketplaceCtx.loadOfferCount(mktContract);
          
          // // Load offers
          marketplaceCtx.loadOffers(mktContract, offerCount); 
          
          // // Load User Funds
          account && marketplaceCtx.loadUserFunds(mktContract, account);

          // Event OfferFilled subscription 
          mktContract_1.events.OfferFilled()
          .on('data', (event) => {
            marketplaceCtx.updateOffer(event.returnValues.offerId);
            collectionCtx.updateOwner(event.returnValues.id, event.returnValues.newOwner);
            marketplaceCtx.setMktIsLoading(false);
          })
          .on('error', (error) => {
            console.log(error);
          });


          mktContract_1.events.CollateralOffered()
          .on('data', (event) => {
            marketplaceCtx.updateOffer(event.returnValues.offerId);
            collectionCtx.updateOwner(event.returnValues.id, event.returnValues.newOwner);
            marketplaceCtx.setMktIsLoading(false);
            console.log("event : "); console.log(event);
          })
          .on('error', (error) => {
            console.log("CollateralOffered error : "); console.log(error);
          });


          // Event Offer subscription 
          mktContract_1.events.Offer()
          .on('data', (event) => {
            marketplaceCtx.addOffer(event.returnValues);
            marketplaceCtx.setMktIsLoading(false);
          })
          .on('error', (error) => {
            console.log(error);
          });

          // Event offerCancelled subscription 
          mktContract_1.events.OfferCancelled()
          .on('data', (event) => {
            marketplaceCtx.updateOffer(event.returnValues.offerId);
            collectionCtx.updateOwner(event.returnValues.id, event.returnValues.owner);
            marketplaceCtx.setMktIsLoading(false);
          })
          .on('error', (error) => {
            console.log(error);
          });
          
        } else {
          window.alert('NFTMarketplace contract not deployed to detected network.')
        }
      }
      collectionCtx.setNftIsLoading(false);
      marketplaceCtx.setMktIsLoading(false);

      // Metamask Event Subscription - Account changed
      // window.ethereum.on('accountsChanged', (accounts) => {
      //   web3Ctx.loadAccount(web3);
      //   accounts[0] && marketplaceCtx.loadUserFunds(mktContract, accounts[0]);
      // });

      // Metamask Event Subscription - Network changed
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
    };
    
    loadBlockchainData();
  }, [active]);

  // const showNavbar = web3 && collectionCtx.contract && marketplaceCtx.contract;
  // const showContent = web3 && collectionCtx.contract && marketplaceCtx.contract && web3Ctx.account;
  //console.log("showContent: "); console.log(showContent);

  return(
    <React.Fragment>
      {<ConnectBar isConnected={conn}/>}
      {/* {showNavbar && <Navbar />}
      {showContent && <Main />} */}
      <Navbar />
      <Main />
    </React.Fragment>
  );
};

export default App;