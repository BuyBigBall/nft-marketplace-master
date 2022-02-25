import { useReducer } from 'react';

import CollectionContext from './collection-context';

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
  
  const changeAccountHandler = (account) => {
    dispatchCollectionAction({type: 'ACCOUNTCHANGE', account: account}); 
    return account;
  };
  
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

    // console.log(props);    console.log(collectionContext);
    
    // console.log("contract.methods = ");    console.log(contract.methods);
    let iCount = 0;
    //totalSupply = 1;
    for(let i = 0; i < totalSupply; i++) {
      const hash = await contract.methods.tokenURIs(i).call();
      try {
        const owner = await contract.methods.ownerOf(i + 1).call();
        if(i>=5 )
        {
          if(owner!=account)        
          continue;
        } 

        var _url = `https://ipfs.infura.io/ipfs/${hash}?clear`;
        console.log(_url);
        const response = await fetch(_url);
        if(!response.ok) {
          console.log( "erro: " + + _url);
          throw new Error('Something went wrong in fetching.');
        }

        console.log(contract.methods.ownerOf(i + 1));
        const metadata = await response.json();

        // if(i>=10 ) break; // for test calling is very slow and didnot end this function.

        console.log("collection.length : ");        console.log(collection.length);
        iCount++;
        //console.log(metadata.properties);
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
    <CollectionContext.Provider value={collectionContext}>
      {props.children}
    </CollectionContext.Provider>
  );
};

export default CollectionProvider;