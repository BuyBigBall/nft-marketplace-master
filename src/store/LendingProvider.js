import { useReducer } from 'react';

import LendingContext from './lending-context';

const defaultLendingState = {
  contract: null,
  lentCount: null,
  lentList: [],
  //userFunds: null,
  mktIsLoading: true
};

const lendingReducer = (state, action) => {
  if(action.type === 'CONTRACT') {    
    return {
      contract: action.contract,
      lentCount: state.lentCount,
      lentList: state.lentList,
      //userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADLENTCOUNT') {    
    return {
      contract: state.contract,
      lentCount: action.lentCount,
      lentList: state.lentList,
      //userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'LOADLENTLIST') {    
    return {
      contract: state.contract,
      lentCount: state.lentCount,
      lentList: action.lentList,
      //userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'UPDATELENTLIST') {    
    const lentList = state.lentList.filter(lentCollateral => lentCollateral.LentId !== parseInt(action.lentId));

    return {
      contract: state.contract,
      lentCount: state.lentCount,
      lentList: lentList,
      //userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  if(action.type === 'ADDLENTLIST') {    
    const index = state.lentList.findIndex(collateral => collateral.LentId === parseInt(action.collateral.LentId));
    let lentList = [];

    if(index === -1) {
      lentList = [...state.lentList, {
        lentId: parseInt(action.collateral.LentId),
        id: parseInt(action.collateral.id),
        user: (action.collateral.user),
        price: parseInt(action.collateral.price),
        fulfilled: false,
        cancelled: false
      }];
    } else {
      lentList = [...state.lentList];
    }    

    return {
      contract: state.contract,
      lentCount: state.lentCount,
      lentList: lentList,
      //userFunds: state.userFunds,
      mktIsLoading: state.mktIsLoading
    };
  }

  // if(action.type === 'LOADFUNDS') {
  //   return {
  //     contract: state.contract,
  //     lentCount: state.lentCount,
  //     lentList: state.lentList,
  //     //userFunds: action.userFunds,
  //     mktIsLoading: state.mktIsLoading
  //   };
  // }

  if(action.type === 'LOADING') {    
    return {
      contract: state.contract,
      lentCount: state.lentCount,
      lentList: state.lentList,
      //userFunds: state.userFunds,
      mktIsLoading: action.loading
    };
  }
  
  return defaultLendingState;
};

const LendingProvider = props => {
  const [LendingState, dispatchLendingAction] = useReducer(lendingReducer, defaultLendingState);
  
  const loadContractHandler = (web3, NFTLending, deployedNetwork) => {
    const contract = deployedNetwork ? new web3.eth.Contract(NFTLending, deployedNetwork.address): '';
    dispatchLendingAction({type: 'CONTRACT', contract: contract}); 
    return contract;
  };

  const loadLentCountHandler = async(contract) => {
    const lentCount = await contract.methods.lentCount().call();
   
    dispatchLendingAction({type: 'LOADLENTCOUNT', lentCount: lentCount});
    return lentCount;
  };

  const loadLentListHandler = async(contract, lentCount) => {
    let lentList = [];
    for(let i = 0; i < lentCount; i++) {
      const collateral = await contract.methods.lentERC721List(i + 1).call();
      lentList.push(collateral);
    }
    console.log("loadLentListHandler");
    console.log(lentList);

    lentList = lentList
    .map(collateral => {
      collateral.lentId = parseInt(collateral.lentId);
      collateral.id = parseInt(offer.id);
      collateral.price = parseInt(collateral.price);
      return collateral;
    })
    .filter(collateral => collateral.fulfilled === false && collateral.cancelled === false); 
    dispatchLendingAction({type: 'LOADLENTLIST', lentList: lentList});
  };

  const updateLentListHandler = (lentId) => {
    //console.log("canceled offerId = " + offerId);
    //alert(offerId);
    dispatchLendingAction({type: 'UPDATELENTLIST', lentId: lentId});   
  };

  const addLentListHandler = (offer) => {
    dispatchLendingAction({type: 'ADDLENTLIST', offer: offer});   
  };

  // const loadUserFundsHandler = async(contract, account) => {
  //   const userFunds = await contract.methods.userFunds(account).call();
  //   dispatchLendingAction({type: 'LOADFUNDS', //userFunds: userFunds});
  //   return userFunds;
  // };

  const setMktIsLoadingHandler = (loading) => {
    dispatchLendingAction({type: 'LOADING', loading: loading});
  };

  const marketplaceContext = {
    contract: LendingState.contract,
    lentCount: LendingState.lentCount,
    lentList: LendingState.lentList,
    //userFunds: LendingState.userFunds,
    mktIsLoading: LendingState.mktIsLoading,

    loadContract: loadContractHandler,
    loadLentCount: loadLentCountHandler,
    loadLentList: loadLentListHandler,
    updateLentList: updateLentListHandler,
    addLentList: addLentListHandler,
    //loadUserFunds: loadUserFundsHandler,
    setMktIsLoading: setMktIsLoadingHandler
  };
  
  return (
    <LendingContext.Provider value={marketplaceContext}>
      {props.children}
    </LendingContext.Provider>
  );
};

export default LendingProvider;