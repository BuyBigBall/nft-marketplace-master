import React from 'react';

const LendingContext = React.createContext({
  contract: null,
  lentCount: null,
  lentList: [],
  //userFunds: null,
  mktIsLoading: true,
  loadContract: () => {},
  loadLentCount: () => {},
  loadLentList: () => {},
  updateOffer: () => {},
  addOffer: () => {},
  //loadUserFunds: () => {},
  setMktIsLoading: () => {}
});

export default LendingContext;