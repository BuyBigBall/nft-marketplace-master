import React, { useContext, useEffect } from 'react';

import web3 from './connection/web3';
import Navbar from './components/Layout/Navbar';
import Main from './components/Content/Main';
import Web3Context from './store/web3-context';
import CollectionContext from './store/collection-context';
import MarketplaceContext from './store/marketplace-context'

import NFTCollection from './imported_abis/NFTCollection';    
import NFTMarketplace from './imported_abis/NFTMarketplace';

const Home = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  
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
      const nftContract = collectionCtx.loadContract(web3, NFTCollection, account);
      const mktContract = marketplaceCtx.loadContract(web3, NFTMarketplace, account);
      
      if(nftContract) {        
        // Load total Supply
        const totalSupply = await collectionCtx.loadTotalSupply(nftContract);
       
        // Load Collection
        collectionCtx.loadCollection(nftContract, totalSupply, account);       

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
        mktContract.events.Offered()
        .on('data', (event) => {
          marketplaceCtx.addOffer(event.returnValues);
          marketplaceCtx.setMktIsLoading(false);
        })
        .on('error', (error) => {
          console.log(error);
        });

        // Event Offer Loan 
        mktContract.events.loanOffered()
            .on('data', (event) => {
              marketplaceCtx.setLoanNft(event.returnValues);
              marketplaceCtx.setMktIsLoading(false);
            })
            .on('error', (error) => {
              console.log(error);
            });
        // Event offerCancelled subscription 
        mktContract.events.OfferCancelled()
        .on('data', (event) => {
          marketplaceCtx.updateOffer(event.returnValues.tokenId);
          collectionCtx.updateOwner(event.returnValues.id, event.returnValues.owner);
          marketplaceCtx.setMktIsLoading(false);
        })
        .on('error', (error) => {
          console.log(error);
        });
        
      } else {
        window.alert('NFTMarketplace contract not deployed to detected network.')
      }

      // const lendingContract = new web3.eth.Contract(
      //   NFTLENDINGABI.abi, 
      //   ERC721_LENDING_CONTACT_ADDRESS);

      
      collectionCtx.setNftIsLoading(false);
      marketplaceCtx.setMktIsLoading(false);

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

export default Home;