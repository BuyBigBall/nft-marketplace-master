import React, { useContext, useEffect } from 'react';

import web3               from './connection/web3';
import Navbar             from './components/Layout/Navbar';
import Web3Context        from './store/web3-context';
import CollectionContext  from './store/collection-context';
import MarketplaceContext from './store/marketplace-context'
import LendingContext     from './store/lending-context'

import NFTCollection      from './imported_abis/NFTCollection';    
import NFTMarketplace     from './imported_abis/NFTMarketplace';
import NFTLendingJson     from './imported_abis/ERC721Lending';

import Lending            from '../src/components/Content/NFTCollection/NFTLending';

const NFTLending = () => {
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

      // Load Network ID connected by metamask( for ex: Rinkeby Test Network )
      const networkId = await web3Ctx.loadNetworkId(web3);

      // Load Contracts      
      const nftContract = collectionCtx.loadContract(web3, NFTCollection, account);
      const mktContract = marketplaceCtx.loadContract(web3, NFTMarketplace, account);
      const lendingContract  = lendingCtx.loadContract(web3, NFTLendingJson, account);
      //const lendingContract = new web3.eth.Contract( NFTLENDINGABI.abi, ERC721_LENDING_CONTACT_ADDRESS);

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

        // Event Offer Loan 
        mktContract.events.loanOffered()
            .on('data', (event) => {
              console.log("loanOffered : ");
              console.log(event);
              // marketplaceCtx.setLoanNft(event.returnValues);
              // marketplaceCtx.setMktIsLoading(false);
            })
            .on('error', (error) => {
              console.log(error);
            });

        mktContract.events.loanBorrowingStarted()
            .on('data', (event) => {
              console.log("loanBorrowingStarted : ");
              console.log(event);
              // marketplaceCtx.setLoanNft(event.returnValues);
              // marketplaceCtx.setMktIsLoading(false);
            })
            .on('error', (error) => {
              console.log(error);
            });
        mktContract.events.loanBorrowingStopped()
            .on('data', (event) => {
              console.log("loanBorrowingStopped : ");
              console.log(event);
              // marketplaceCtx.setLoanNft(event.returnValues);
              // marketplaceCtx.setMktIsLoading(false);
            })
            .on('error', (error) => {
              console.log(error);
            });
        mktContract.events.loanBorrowingClaimed()
            .on('data', (event) => {
              console.log("loanBorrowingClaimed : ");
              console.log(event);
              // marketplaceCtx.setLoanNft(event.returnValues);
              // marketplaceCtx.setMktIsLoading(false);
            })
            .on('error', (error) => {
              console.log(error);
            });

        // Event Offer Loan 
        // mktContract.events.loanOffered()
        //     .on('data', (event) => {
        //       marketplaceCtx.setLoanNft(event.returnValues);
        //       marketplaceCtx.setMktIsLoading(false);
        //     })
        //     .on('error', (error) => {
        //       console.log(error);
        //     });

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


      if(lendingContract) {
        // Load lending loan count
        const lendingCount = await lendingCtx.getLoanCount(lendingContract);
        
        // Load offers
        lendingCtx.loadLoanCollection(lendingContract, lendingCount); 

        // // Event Offer Loan 
        // lendingContract.events.loanOffered()
        //     .on('data', (event) => {
        //       lendingCtx.setLoanNft(event.returnValues);
        //       lendingCtx.setNftIsLoading(false);
        //     })
        //     .on('error', (error) => {
        //       console.log(error);
        // });
        // // Event offerCancelled subscription 
        // lendingContract.events.OfferCancelled()
        //     .on('data', (event) => {
        //       lendingCtx.updateOffer(event.returnValues.tokenId);
        //       collectionCtx.updateOwner(event.returnValues.id, event.returnValues.owner);
        //       lendingCtx.setNftIsLoading(false);
        //     })
        //     .on('error', (error) => {
        //       console.log(error);
        // });
        
      } else {
        window.alert('NFTMarketplace contract not deployed to detected network.')
      }
      
      collectionCtx.setNftIsLoading(false);
      marketplaceCtx.setMktIsLoading(false);
      lendingCtx.setNftIsLoading(false);

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
      <div> <h2> Lending List</h2></div>
      {showContent && <Lending />}
    </React.Fragment>
  );
};

export default NFTLending;