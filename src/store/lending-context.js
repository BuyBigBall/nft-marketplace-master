import React from 'react';

const LendingContext = React.createContext({
  contract: null,
  totalCount: null,
  collection: [],
  nftIsLoading: true,
  loadContract: () => {},
  getLoanCount: () => {},
  loadCollection: () => {},
  setLoanCount: () => {},
  updateCollection: () => {},
  setNftIsLoading: () => {}
});

export default LendingContext;