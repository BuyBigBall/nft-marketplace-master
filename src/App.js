import React, { useContext, useEffect } from 'react';

import web3 from './connection/web3';
import Navbar from './components/Layout/Navbar';
import Main from './components/Content/Main';
import Web3Context from './store/web3-context';
import CollectionContext from './store/collection-context';
import MarketplaceContext from './store/marketplace-context'
import LendingContext from './store/lending-context'

import ERC721Lending from './abis/ERC721Lending.json';

import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS
    } from './config';
import NFTCollection from './imported_abis/NFTCollection';    
import NFTMarketplace from './imported_abis/NFTMarketplace';
    
    import NFTLENDINGABI from './imported_abis/ERC721Lending';


const App = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  const lendingCtx = useContext(LendingContext);
  
  useEffect(() => {
    // Check if the user has Metamask active
    if(!web3) {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
      return;
    }
    
    // Function to fetch all the blockchain data
    const loadBlockchainData = async() => {
      // Request accounts acccess if needed
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });  
      } catch(error) {
        console.error(error);
      }
      
      // Load account
      const account = await web3Ctx.loadAccount(web3);

      // Load Network ID
      const networkId = await web3Ctx.loadNetworkId(web3);

      // Load Contracts      
      const nftDeployedNetwork = '';//NFTCollection.networks[networkId];
      //const nftContract = collectionCtx.loadContract(web3, NFTCollection, nftDeployedNetwork);
      const nftContract = collectionCtx.loadContract(web3, NFTCollection, account);
      
      // console.log("collectionCtx.collection in App.js: ");
      // console.log(collectionCtx.collection);

      const mktDeployedNetwork = '';//NFTMarketplace.networks[networkId];
      //const mktContract = marketplaceCtx.loadContract(web3, NFTMarketplace, mktDeployedNetwork);
      const mktContract = marketplaceCtx.loadContract(web3, NFTMarketplace, account);
      
      // const lendingDeployedNetwork = ERC721Lending.networks[networkId];
      // console.log(networkId);      console.log(ERC721Lending.networks[networkId]);
      //const lendingContract = lendingCtx.loadContract(web3, ERC721Lending, lendingDeployedNetwork);


      if(nftContract) {        
        // Load total Supply
        const totalSupply = await collectionCtx.loadTotalSupply(nftContract);
        
       
        // Load Collection
        collectionCtx.loadCollection(nftContract, totalSupply, account);       
        //console.log("collectionCtx.collection.length = " + collectionCtx.collection.length);

        // Event subscription
        nftContract.events.Transfer()
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

      // console.log("mktContract : "); console.log(mktContract);


      if(mktContract) {
        // Load offer count
        const offerCount = await marketplaceCtx.loadOfferCount(mktContract);
        
        // Load offers
        marketplaceCtx.loadOffers(mktContract, offerCount); 
        
        // Load User Funds
        account && marketplaceCtx.loadUserFunds(mktContract, account);

        // Event OfferFilled subscription 
        mktContract.events.OfferFilled()
        .on('data', (event) => {
          marketplaceCtx.updateOffer(event.returnValues.offerId);
          collectionCtx.updateOwner(event.returnValues.id, event.returnValues.newOwner);
          marketplaceCtx.setMktIsLoading(false);
        })
        .on('error', (error) => {
          console.log(error);
        });

        // Event Offer subscription 
        mktContract.events.Offer()
        .on('data', (event) => {
          marketplaceCtx.addOffer(event.returnValues);
          marketplaceCtx.setMktIsLoading(false);
        })
        .on('error', (error) => {
          console.log(error);
        });

        // Event offerCancelled subscription 
        mktContract.events.OfferCancelled()
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

      const lendingContract = new web3.eth.Contract(
        NFTLENDINGABI.abi, 
        ERC721_LENDING_CONTACT_ADDRESS);
      console.log("lendingContract: "); console.log(lendingContract);

      // console.log("lendingContract"); console.log(lendingContract.methods);
      // console.log("lendingCtx");console.log(lendingCtx)
      if(lendingCtx) {
        // Load offer count
        //const lentCount = await lendingCtx.loadLentCount(lendingContract.methods);
        //const lentCount = await lendingContract.methods.getLentCount().call();
        //console.log("lentCount : "); console.log(lentCount);
      }
      //   const lentCount = await lendingContract.methods.lentCount().call();
      //   // .send({ from: web3Ctx.account })
      //   //   .on('transactionHash', (hash) => {
      //   //     collectionCtx.setNftIsLoading(true);
      //   //      console.log(hash)
      //   //   })
      //   //   .on('error', (e) =>{
      //   //     window.alert('Something went wrong when pushing a NFT to the blockchain');
      //   //     collectionCtx.setNftIsLoading(false);  
      //   //   })   ;
      //  
        
        
      //   // Load offers
      //   lendingCtx.loadLentList(lendingContract, lentCount); 
        
      //   // Load User Funds
      //   // account && lendingCtx.loadUserFunds(lendingContract, account);

      //   // Event OfferFilled subscription 
      //   // lendingContract.events.OfferFilled()
      //   // .on('data', (event) => {
      //   //   marketplaceCtx.updateOffer(event.returnValues.offerId);
      //   //   collectionCtx.updateOwner(event.returnValues.id, event.returnValues.newOwner);
      //   //   marketplaceCtx.setMktIsLoading(false);
      //   // })
      //   // .on('error', (error) => {
      //   //   console.log(error);
      //   // });

      //   // Event Offer subscription 
      //   mktContract.events.Offer()
      //   .on('data', (event) => {
      //     marketplaceCtx.addOffer(event.returnValues);
      //     marketplaceCtx.setMktIsLoading(false);
      //   })
      //   .on('error', (error) => {
      //     console.log(error);
      //   });

      //   // // Event offerCancelled subscription 
      //   // mktContract.events.OfferCancelled()
      //   // .on('data', (event) => {
      //   //   marketplaceCtx.updateOffer(event.returnValues.offerId);
      //   //   collectionCtx.updateOwner(event.returnValues.id, event.returnValues.owner);
      //   //   marketplaceCtx.setMktIsLoading(false);
      //   // })
      //   // .on('error', (error) => {
      //   //   console.log(error);
      //   // });
        
      // } else {
      //   window.alert('NFTMarketplace contract not deployed to detected network.')
      // }     
      
      
      collectionCtx.setNftIsLoading(false);
      marketplaceCtx.setMktIsLoading(false);
      //lendingCtx.setMktIsLoading(false);

      // Metamask Event Subscription - Account changed
      window.ethereum.on('accountsChanged', (accounts) => {
        web3Ctx.loadAccount(web3);
        accounts[0] && marketplaceCtx.loadUserFunds(mktContract, accounts[0]);
      });

      // Metamask Event Subscription - Network changed
      window.ethereum.on('chainChanged', (chainId) => {
        window.location.reload();
      });
    };
    
    loadBlockchainData();
  }, []);

  const showNavbar = web3 && collectionCtx.contract && marketplaceCtx.contract;
  const showContent = web3 && collectionCtx.contract && marketplaceCtx.contract && web3Ctx.account;
  //console.log("showContent: "); console.log(showContent);

  return(
    <React.Fragment>
      {showNavbar && <Navbar />}
      {showContent && <Main />}
    </React.Fragment>
  );
};

export default App;