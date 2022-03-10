import { useReducer } from 'react';

import LendingContext from './lending-context';
import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS
    } from '../config';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';


const defaultLendingState = {
  contract: null,
  totalCount: null,
  collection: [],
  nftIsLoading: true
};

const collectionReducer = (state, action) => {
  if(action.type === 'CONTRACT') {    
    return {
      contract: action.contract,
      totalCount: state.totalCount,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading
    };
  } 
  
  if(action.type === 'LOADSUPPLY') {
    return {
      contract: state.contract,
      totalCount: action.totalCount,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading
    };
  }

  
  if(action.type === 'CANCELEDOFFER') {    
    const collection = state.collection.filter(loanNFT => loanNFT.offerId !== parseInt(action.offerId));

    return {
      contract: state.contract,
      totalCount: state.offerCount,
      collection: collection,
      nftIsLoading: state.nftIsLoading
    };
  }

  if(action.type === 'LOADCOLLECTION') {    
    return {
      contract: state.contract,
      totalCount: state.totalCount,
      collection: action.collection,
      nftIsLoading: state.nftIsLoading
    };
  }

  // if(action.type === 'ACCOUNTCHANGE') {    
  //   //console.log(action);
  //   return {
  //     contract: state.contract,
  //     totalCount: state.totalCount,
  //     collection: state.collection,
  //     nftIsLoading: state.nftIsLoading
  //   };
  // }

  // if(action.type === 'UPDATECOLLECTION') {    
  //   const index = state.collection.findIndex(NFT => NFT.id === parseInt(action.NFT.id));
  //   let collection = [];

  //   if(index === -1) {
  //     collection = [action.NFT, ...state.collection];
  //   } else {
  //     collection = [...state.collection];
  //   }    

  //   return {
  //     contract: state.contract,
  //     totalCount: state.totalCount,
  //     collection: collection,
  //     nftIsLoading: state.nftIsLoading
  //   };
  // }

  // if(action.type === 'UPDATEOWNER') {
  //   const index = state.collection.findIndex(NFT => NFT.id === parseInt(action.id));
  //   let collection = [...state.collection];
  //   collection[index].owner = action.newOwner;

  //   return {
  //     contract: state.contract,
  //     totalCount: state.totalCount,
  //     collection: collection,
  //     nftIsLoading: state.nftIsLoading
  //   };
  // }

  if(action.type === 'LOADING') {    
    return {
      contract: state.contract,
      totalCount: state.totalCount,
      collection: state.collection,
      nftIsLoading: action.loading
    };
  }
  
  return defaultLendingState;
};

const LendingProvider = props => {
  const [LendingState, dispatchLendingAction] = useReducer(collectionReducer, defaultLendingState);
  const { active, account, library, activate } = useWeb3React();

  const loadContractHandler = (web3, NFTLending, account) => {
          const contract = new web3.eth.Contract(NFTLending.abi
                      , ERC721_LENDING_CONTACT_ADDRESS);
          if(library) contract.connect(library.getSigner(account));  
    dispatchLendingAction({type: 'CONTRACT', contract: contract}); 
    return contract;
  };
  const getLoanCountHandler = async(contract) => {
    const totalCount = await contract.methods.lentCount().call();

    dispatchLendingAction({type: 'LOADSUPPLY', totalCount: totalCount});
    return totalCount;
  };

  const loadLoanCollectionHandler = async(contract, totalCount) => {
    let collection = [];

    //totalCount = 1;
    for(let i = 0; i < totalCount; i++) {
      // this is no metamask call
      const entryObj = await contract.methods.lendersWithTokens(i).call();
      
      if(!entryObj) continue;
      try {
        const owner = entryObj.lenderAddress;
        const metadata = await contract.methods.lentERC721List(entryObj.tokenAddress, entryObj.tokenId).call();   //this is current owner

        collection = [{
          id: i + 1,          //id: iCount,
          durationHours:        metadata.durationHours ,//metadata.properties.name.description,
          initialWorth:         metadata.initialWorth,// metadata.properties.image.description,
          earningGoal:          metadata.earningGoal,
          borrowedAtTimestamp:  metadata.borrowedAtTimestamp,
          lender:               metadata.lender,
          borrower:             metadata.borrower,
          lenderClaimedNFT:    metadata.lenderClaimedNFT,
          sablierSalaryId:      metadata.sablierSalaryId,
          platformFeesPercent:  metadata.platformFeesPercent,
          chain: 'Ethereum',
          owner: owner,
          tokenAddress:         entryObj.tokenAddress, 
          tokenId:              entryObj.tokenId
        }, ...collection];
      }catch(err) {
        console.error( 'Something went wrong' );
        console.log(err);
      }
    }

    dispatchLendingAction({type: 'LOADSUPPLY', totalCount: collection.length});
    dispatchLendingAction({type: 'LOADCOLLECTION', collection: collection});     
  };

  const cancelLoanOfferHandler = async(offerId) => {
    dispatchLendingAction({type: 'CANCELEDOFFER', offerId: offerId});    
  }
  
  const updateLoanCollectionHandler = async(contract, id, owner) => {
    let NFT;
    const entryObj = await contract.methods.lendersWithTokens(id).call();
    try {
      const metadata = await contract.methods.lentERC721List(entryObj.tokenAddress, entryObj.tokenId).call();   //this is current owner

      NFT = {
        id: parseInt(id),
        durationHours:        metadata.durationHours ,//metadata.properties.name.description,
        initialWorth:         metadata.initialWorth,// metadata.properties.image.description,
        earningGoal:          metadata.earningGoal,
        borrowedAtTimestamp:  metadata.borrowedAtTimestamp,
        lender:               metadata.lender,
        borrower:             metadata.borrower,
        lenderClaimedNFT: metadata.lenderClaimedNFT,
        sablierSalaryId:      metadata.sablierSalaryId,
        platformFeesPercent:  metadata.platformFeesPercent,
        chain: 'Ethereum',
        owner: owner
      };
    }catch {
        console.error('Something went wrong');
    }
    dispatchLendingAction({type: 'UPDATECOLLECTION', NFT: NFT});
  };

  // const updateOwnerHandler = (id, newOwner) => {
  //   dispatchLendingAction({type: 'UPDATEOWNER', id: id, newOwner: newOwner});
  // };

  const setNftIsLoadingHandler = (loading) => {
    dispatchLendingAction({type: 'LOADING', loading: loading});
  };

  const collectionContext = {
    contract:     LendingState.contract,
    totalCount:   LendingState.totalCount,
    collection:   LendingState.collection,
    nftIsLoading: LendingState.nftIsLoading,
    // account: LendingState.account,
    // changeAccount: changeAccountHandler,
    // updateOwner: updateOwnerHandler,
    loadContract: loadContractHandler,
    getLoanCount: getLoanCountHandler,
    loadLoanCollection: loadLoanCollectionHandler,
    cancelLoanOffer: cancelLoanOfferHandler,
    updateLoanCollection: updateLoanCollectionHandler,
    setNftIsLoading: setNftIsLoadingHandler
  };
  
  return (
    <LendingContext.Provider 
          value={collectionContext}>
      {props.children}
    </LendingContext.Provider>
  );
};

export default LendingProvider;