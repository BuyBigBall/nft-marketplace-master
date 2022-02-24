import React from 'react';

const MarketplaceContext = React.createContext({
  // loan:null,
  contract: null,
  offerCount: null,
  offers: [],
  userFunds: null,
  mktIsLoading: true,
  //fundLoan: () => {},
  loadContract: () => {},
  loadOfferCount: () => {},
  loadOffers: () => {},
  updateOffer: () => {},
  addOffer: () => {},
  loadUserFunds: () => {},
  setMktIsLoading: () => {}
});

export default MarketplaceContext;