import { useReducer } from 'react';

import MarketplaceContext from './marketplace-context';
import { useWeb3React } from '@web3-react/core';


import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS
    } from '../config';
import { Web3Provider } from '@ethersproject/providers';

const defaultMarketplaceState = {
  contract: null,
  offerCount: null,
  offers: [],
  userFunds: null,
  mktIsLoading: true
};

const marketplaceReducer = (state, action) => {
  if(action.type === 'CONTRACT') {    
    return {
      contract: action.contract,
      offerCount: state.offerCount,
      offers: state.offers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADOFFERCOUNT') {    
    return {
      contract: state.contract,
      offerCount: action.offerCount,
      offers: state.offers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADOFFERS') {    
    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: action.offers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'UPDATEOFFER') {    
    const offers = state.offers.filter(offer => offer.offerId !== parseInt(action.offerId));

    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: offers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'OFFERLOANNFT') {    
    const offers = state.offers.filter(offer => offer.offerId !== parseInt(action.tokenId));
    const offerLoanNft = state.offers.filter(offer => offer.offerId === parseInt(action.tokenId));
  
  
    const newOffers = [...offers, {
      offerId: parseInt(offerLoanNft.offerId),
      id: parseInt(offerLoanNft.id),
      user: (offerLoanNft.user),
      price: parseInt(offerLoanNft.price),
      fulfilled: false,
      cancelled: false,
      lentStatus: 1
    }];

    console.log('OFFERLOANNFT');
    console.log(newOffers);
    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: newOffers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

 if(action.type === 'ADDOFFER') {    
    const index = state.offers.findIndex(offer => offer.offerId === parseInt(action.offer.offerId));
    let offers = [];

    if(index === -1) {
      offers = [...state.offers, {
        offerId: parseInt(action.offer.offerId),
        id: parseInt(action.offer.id),
        user: (action.offer.user),
        price: parseInt(action.offer.price),
        fulfilled: false,
        cancelled: false,
        lentStatus: 0
      }];
    } else {
      offers = [...state.offers];
    }    

    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: offers,
      userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADFUNDS') {
    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: state.offers,
      userFunds: action.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADING') {    
    return {
      contract: state.contract,
      offerCount: state.offerCount,
      offers: state.offers,
      userFunds: state.userFunds,
      mktIsLoading: action.loading
    };
  }
  
  return defaultMarketplaceState;
};

const MarketplaceProvider = props => {
  const { active, account, library, activate } = useWeb3React();
  const [MarketplaceState, dispatchMarketplaceAction] = useReducer(marketplaceReducer, defaultMarketplaceState);
  
  const loadContractHandler = (web3, NFTMarketplace, account) => {
    const contract = new web3.eth.Contract(NFTMarketplace.abi
              , ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS);
    if(library) contract.connect(library.getSigner(account));
    dispatchMarketplaceAction({type: 'CONTRACT', contract: contract}); 

    return contract;
  };

  const loadOfferCountHandler = async(contract) => {
    
    const offerCount = await contract.methods.offerCount().call();
    dispatchMarketplaceAction({type: 'LOADOFFERCOUNT', offerCount: offerCount});
    return offerCount;
  };

  const loadOffersHandler = async(contract, offerCount) => {
    let offers = [];
    for(let i = 0; i < offerCount; i++) {
      const offer = await contract.methods.offers(i + 1).call();
      offers.push(offer);
    }
    offers = offers
    .map(offer => {
      offer.offerId = parseInt(offer.offerId);
      offer.id = parseInt(offer.id);
      offer.price = parseInt(offer.price);
      offer.lentStatus = parseInt(offer.lentStatus);
      return offer;
    })
    .filter(offer => offer.fulfilled === false && offer.cancelled === false); 
    dispatchMarketplaceAction({type: 'LOADOFFERS', offers: offers});
  };

  const updateOfferHandler = (offerId) => {
    dispatchMarketplaceAction({type: 'UPDATEOFFER', offerId: offerId});   
  };

  const setLoanNftHandler = (tokenId) =>
  {
    dispatchMarketplaceAction({type: 'OFFERLOANNFT', tokenId: tokenId});   
  };

  const addOfferHandler = (offer) => {
    dispatchMarketplaceAction({type: 'ADDOFFER', offer: offer});   
  };

  const loadUserFundsHandler = async(contract, account) => {
    const userFunds = await contract.methods.userFunds(account).call();
    dispatchMarketplaceAction({type: 'LOADFUNDS', userFunds: userFunds});
    return userFunds;
  };

  const setMktIsLoadingHandler = (loading) => {
    dispatchMarketplaceAction({type: 'LOADING', loading: loading});
  };

  const marketplaceContext = {
    contract: MarketplaceState.contract,
    offerCount: MarketplaceState.offerCount,
    offers: MarketplaceState.offers,
    userFunds: MarketplaceState.userFunds,
    mktIsLoading: MarketplaceState.mktIsLoading,
    loadContract: loadContractHandler,
    loadOfferCount: loadOfferCountHandler,
    loadOffers: loadOffersHandler,
    updateOffer: updateOfferHandler,
    addOffer: addOfferHandler,
    loadUserFunds: loadUserFundsHandler,
    setMktIsLoading: setMktIsLoadingHandler,
    setLoanNft: setLoanNftHandler
  };
  
  const getLibrary = provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 12000;
    return library;
}

  return (
    <MarketplaceContext.Provider 
                getLibrary={getLibrary} 
                value={marketplaceContext}>
      {props.children}
    </MarketplaceContext.Provider>
  );
};

export default MarketplaceProvider;