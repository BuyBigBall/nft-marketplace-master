import { useReducer } from 'react';

import CollectionContext from './collection-context';
import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS
    } from '../config';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';


const defaultCollectionState = {
  contract: null,
  totalSupply: null,
  collection: [],
  nftIsLoading: true,
  account:''
};

const collectionReducer = (state, action) => {
  if(action.type === 'CONTRACT') {    
    return {
      contract: action.contract,
      totalSupply: state.totalSupply,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading,
      account: state.account
    };
  } 
  
  if(action.type === 'LOADSUPPLY') {
    return {
      contract: state.contract,
      totalSupply: action.totalSupply,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading,
      account: state.account
    };
  }

  if(action.type === 'LOADCOLLECTION') {    
    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: action.collection,
      nftIsLoading: state.nftIsLoading,
      account: state.account
    };
  }

  if(action.type === 'ACCOUNTCHANGE') {    
    //console.log(action);
    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading,
      account: action.account
    };
  }

  if(action.type === 'UPDATECOLLECTION') {    

    if(action.NFT===undefined) 
    {
      return{
        contract: state.contract,
        totalSupply: state.totalSupply,
        collection: state.collection,
        nftIsLoading: state.nftIsLoading,
        account: state.account
      };
    }
    const index = state.collection.findIndex(NFT => NFT.id === parseInt(action.NFT.id));
    let collection = [];

    if(index === -1) {
      collection = [action.NFT, ...state.collection];
    } else {
      collection = [...state.collection];
    }    

    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: collection,
      nftIsLoading: state.nftIsLoading,
      account: state.account
    };
  }

  if(action.type === 'UPDATEOWNER') {
    const index = state.collection.findIndex(NFT => NFT.id === parseInt(action.id));
    let collection = [...state.collection];
    collection[index].owner = action.newOwner;

    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: collection,
      nftIsLoading: state.nftIsLoading,
      account: state.account
    };
  }

  if(action.type === 'LOADING') {    
    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: state.collection,
      nftIsLoading: action.loading,
      account: state.account
    };
  }
  
  return defaultCollectionState;
};

const CollectionProvider = props => {
  const [CollectionState, dispatchCollectionAction] = useReducer(collectionReducer, defaultCollectionState);
  const { active, account, library, activate } = useWeb3React();

  const changeAccountHandler = (account) => {
    dispatchCollectionAction({type: 'ACCOUNTCHANGE', account: account}); 
    return account;
  };
  
  const loadContractHandler = (web3, NFTCollection, account) => {
          const contract = new web3.eth.Contract(NFTCollection.abi
                      , ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS);
          if(library) contract.connect(library.getSigner(account));  
    dispatchCollectionAction({type: 'CONTRACT', contract: contract}); 
    return contract;
  };
  const loadTotalSupplyHandler = async(contract) => {
    const totalSupply = await contract.methods.totalSupply().call();

    dispatchCollectionAction({type: 'LOADSUPPLY', totalSupply: totalSupply});
    return totalSupply;
  };

  const loadCollectionHandler = async(contract, totalSupply, account) => {
    let collection = [];

    //totalSupply = 1;
    for(let i = 0; i < totalSupply; i++) {
      /*
        // this is metamask call
        // contract.methods.tokenURIs(i).send({from: account}).then(function(receipt){
        //   console.log("receipt");       console.log(receipt);
        //   });
      // */

      // this is no metamask call
      const hash = await contract.methods.tokenURIs(i).call();
      // const hash = await contract.methods.tokenURIs(i).call()
      //       .then(function(receipt){
      //         console.log("receipt");       console.log(receipt);
      //         console.log(hash);
      //         });

      if(!hash) continue;
      try {
        const owner = await contract.methods.ownerOf(i + 1).call();   //this is current owner
        
        var _url = `https://ipfs.infura.io/ipfs/${hash}?clear`;
        const response = await fetch(_url);
        if(!response.ok) {
          console.log( "error: " + _url);
          throw new Error('Something went wrong in fetching.');
        }

        const metadata = await response.json();
        console.log(i + " owner := " + owner); console.log(metadata.properties.name.description + '' );

        collection = [{
          id: i + 1,          //id: iCount,
          title: metadata.properties.name.description,
          img: metadata.properties.image.description,
          link: metadata.properties.link ? metadata.properties.link.description : '',
          description: metadata.properties.description ? metadata.properties.description.description : '',
          categories: metadata.properties.category ? metadata.properties.category : [],
          properties: metadata.properties.property ? metadata.properties.property : [],
          levels: [],
          unlockable: metadata.properties.unlockable ? metadata.properties.unlockable.description : '',
          explicit: metadata.properties.explicit ? metadata.properties.explicit.description : '',
          supply: metadata.properties.supply ? metadata.properties.supply.description : '' ,
          chain: 'Ethereum',
          owner: owner
        }, ...collection];
      }catch(err) {
        console.error( 'Something went wrong' );
        console.log(err);
      }
    }

    dispatchCollectionAction({type: 'LOADSUPPLY', totalSupply: collection.length});
    dispatchCollectionAction({type: 'LOADCOLLECTION', collection: collection});     
  };

  const updateCollectionHandler = async(contract, id, owner) => {
    let NFT;
    const hash = await contract.methods.tokenURI(id).call();
    try {
      const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
      if(!response.ok) {
        throw new Error('Something went wrong');      }

      const metadata = await response.json();      

      // console.log( "update Collection : " );      console.log(metadata.properties);

      NFT = {
        id: parseInt(id),
        title: metadata.properties.name.description,
        img: metadata.properties.image.description,
        link: metadata.properties.link ? metadata.properties.link.description : '',
        description: metadata.properties.description ? metadata.properties.description.description : '',
        categories: metadata.properties.category ? metadata.properties.category : [],
        properties: metadata.properties.property ? metadata.properties.property : [],
        levels: [],
        unlockable: metadata.properties.unlockable ? metadata.properties.unlockable.description : '',
        explicit: metadata.properties.explicit ? metadata.properties.explicit.description : '',
        supply: metadata.properties.supply ? metadata.properties.supply.description : '' ,
        chain: 'Ethereum',
        owner: owner
      };
    }catch {
      console.error('Something went wrong');
    }
    dispatchCollectionAction({type: 'UPDATECOLLECTION', NFT: NFT});
  };

  const updateOwnerHandler = (id, newOwner) => {
    dispatchCollectionAction({type: 'UPDATEOWNER', id: id, newOwner: newOwner});
  };

  const setNftIsLoadingHandler = (loading) => {
    dispatchCollectionAction({type: 'LOADING', loading: loading});
  };

  const collectionContext = {
    contract: CollectionState.contract,
    totalSupply: CollectionState.totalSupply,
    collection: CollectionState.collection,
    nftIsLoading:CollectionState.nftIsLoading,
    account: CollectionState.account,
    changeAccount: changeAccountHandler,
    loadContract: loadContractHandler,
    loadTotalSupply: loadTotalSupplyHandler,
    loadCollection: loadCollectionHandler,
    updateCollection: updateCollectionHandler,
    updateOwner: updateOwnerHandler,
    setNftIsLoading: setNftIsLoadingHandler
  };
  
  return (
    <CollectionContext.Provider 
          value={collectionContext}>
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;