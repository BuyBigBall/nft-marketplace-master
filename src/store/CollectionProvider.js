import { useReducer } from 'react';
import { useContext, useRef, createRef } from 'react';

import CollectionContext from './collection-context';
import web3 from '../connection/web3';
import Web3Context from '../store/web3-context';


const defaultCollectionState = {
  contract: null,
  totalSupply: null,
  collection: [],
  nftIsLoading: true
};

const collectionReducer = (state, action) => {
  if(action.type === 'CONTRACT') {    
    return {
      contract: action.contract,
      totalSupply: state.totalSupply,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading
    };
  } 
  
  if(action.type === 'LOADSUPPLY') {
    return {
      contract: state.contract,
      totalSupply: action.totalSupply,
      collection: state.collection,
      nftIsLoading: state.nftIsLoading
    };
  }

  if(action.type === 'LOADCOLLECTION') {    
    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: action.collection,
      nftIsLoading: state.nftIsLoading
    };
  }

  if(action.type === 'UPDATECOLLECTION') {    
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
      nftIsLoading: state.nftIsLoading
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
      nftIsLoading: state.nftIsLoading
    };
  }

  if(action.type === 'LOADING') {    
    return {
      contract: state.contract,
      totalSupply: state.totalSupply,
      collection: state.collection,
      nftIsLoading: action.loading
    };
  }
  
  return defaultCollectionState;
};

const CollectionProvider = props => {

  const web3Ctx = useContext(Web3Context);
  const [CollectionState, dispatchCollectionAction] = useReducer(collectionReducer, defaultCollectionState);
  
  const loadContractHandler = (web3, NFTCollection, deployedNetwork) => {
    const contract = deployedNetwork ? new web3.eth.Contract(NFTCollection.abi, deployedNetwork.address): '';
    dispatchCollectionAction({type: 'CONTRACT', contract: contract}); 
    return contract;
  };

  const loadTotalSupplyHandler = async(contract) => {
    const totalSupply = await contract.methods.totalSupply().call();

    //console.log("totalSupply: "); console.log(totalSupply);
    dispatchCollectionAction({type: 'LOADSUPPLY', totalSupply: totalSupply});
    return totalSupply;
  };

  const loadCollectionHandler = async(contract, totalSupply, account) => {
    let collection = [];

    // console.log("metamask.account = " + account);
    // console.log("totalSupply : " + totalSupply);
    for(let i = 0; i < totalSupply; i++) {
      
      const hash = await contract.methods.tokenURIs(i).call();

      // console.log("hash : " + hash);
      // console.log(`https://ipfs.infura.io/ipfs/${hash}?clear`);
      try {
        const response = await fetch(`https://ipfs.infura.io/ipfs/${hash}?clear`);
        if(!response.ok) {
          throw new Error('Something went wrong');
        }

        const metadata = await response.json();
        const owner = await contract.methods.ownerOf(i + 1).call();
      if(i>=10 )
      {
        if(owner!=account)        continue;
      } 
      console.log("owner : ");        console.log(owner);

        //console.log(metadata.properties);
        collection = [{
          id: i + 1,
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

      console.log( "update Collection : " );      console.log(metadata.properties);

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
    loadContract: loadContractHandler,
    loadTotalSupply: loadTotalSupplyHandler,
    loadCollection: loadCollectionHandler,
    updateCollection: updateCollectionHandler,
    updateOwner: updateOwnerHandler,
    setNftIsLoading: setNftIsLoadingHandler
  };
  
  return (
    <CollectionContext.Provider value={collectionContext}>
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;