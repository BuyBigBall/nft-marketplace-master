import { useContext, useRef, createRef } from 'react';

import web3 from '../../../connection/web3';
import Web3Context from '../../../store/web3-context';
import LendingContext from '../../../store/lending-context';
import CollectionContext from '../../../store/collection-context';
import MarketplaceContext from '../../../store/marketplace-context';
import { formatPrice } from '../../../helpers/utils';
import eth from '../../../img/eth.png';

import { ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS, 
          ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS, 
          ERC721_LENDING_CONTACT_ADDRESS }  from '../../../config';

import Web3 from 'web3';
import { useEffect, useState } from 'react';


const LendingCollection = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const lendingCollectionCtx = useContext(LendingContext);
  //const marketplaceCtx = useContext(MarketplaceContext);
  const priceRefs = useRef([]);

  // if (priceRefs.current.length !== lendingCollectionCtx.collection.length) {
  //   priceRefs.current = Array(lendingCollectionCtx.collection.length).fill().map(
  //         (_, i) => priceRefs.current[i] || createRef());
  // }
  
  const StartBorrowingHandler = (event, id, key, owner, price) => {
    event.preventDefault();
    // const enteredPrice = web3.utils.toWei(priceRefs.current[key].current.value, 'ether');
    // console.log("StartBorrowingHandler, marketplaceCtx : " + enteredPrice);
    
    var nftContract = ERC721_LENDING_CONTACT_ADDRESS;
    var nftId = id;
    var endTime = Date.now() + 10*60*60*24;
    // var borrowCeiling = enteredPrice;
    var interestPerEthPerDay = 1;
    var NftOwner = owner;
    // LoanContactObject.methods.lend(nftContract,
    //     nftId,
    //     endTime,
    //     borrowCeiling,
    //     interestPerEthPerDay,
    //     NftOwner,
    //         ).send({ from: NftOwner })
    //   .on('transactionHash', (hash) => {
    //     marketplaceCtx.setMktIsLoading(true);
    //   })
    //   .on('receipt', (receipt) => {      
                 
    //   });           
    
  };
  
  const AcceptLendHandler = (event) => {    
    // const buyIndex = parseInt(event.target.value);      
    // marketplaceCtx.contract.methods.fillOffer(marketplaceCtx.offers[buyIndex].offerId)
    //  .send({ from: web3Ctx.account, value: marketplaceCtx.offers[buyIndex].price })
    // .on('transactionHash', (hash) => {
    //   marketplaceCtx.setMktIsLoading(true);
    // })
    // .on('error', (error) => {
    //   window.alert('Something went wrong when pushing a Offer Request to the blockchain');
    //   marketplaceCtx.setMktIsLoading(false);
    // });            
  };

  const cancelHandler = (event) => {    
    // const cancelIndex = parseInt(event.target.value);
    // marketplaceCtx.contract.methods.cancelOffer(marketplaceCtx.offers[cancelIndex].offerId).send({ from: web3Ctx.account })
    // .on('transactionHash', (hash) => {
    //   marketplaceCtx.setMktIsLoading(true);
    // })
    // .on('error', (error) => {
    //   window.alert('Something went wrong when pushing to the blockchain');
    //   marketplaceCtx.setMktIsLoading(false);
    // });    
  };
 
  //console.log("lendingCollectionCtx:"); console.log(lendingCollectionCtx);
  var iCount = 0;
  //console.log("LendingContext");  console.log(lendingCollectionCtx); return '';
  return(
    <div className="row text-center">
      { 
        collectionCtx.collection.map((NFT, key) => {
          //console.log(key);          console.log(NFT);
        const index = lendingCollectionCtx.lentList ? lendingCollectionCtx.lentList.findIndex(lentList => lentList.id === NFT.id) : -1;
        const owner = index === -1 ? NFT.owner : lendingCollectionCtx.lentList[index].user;
        const price = index !== -1 ? formatPrice(lendingCollectionCtx.lentList[index].price).toFixed(2) : null;

        return(
          <div key={key} className="col-md-2 m-3 pb-3 card border-info">
            <div className={"card-body"}>       
              <h5 className="card-title">{NFT.title}</h5>
            </div>
            <img src={`https://ipfs.infura.io/ipfs/${NFT.img}`} className="card-img-bottom" alt={`NFT ${key}`} />
            <p className="fw-light fs-6">{`${owner.substr(0,7)}...${owner.substr(owner.length - 7)}`}</p>
            {index !== -1 ?
              owner !== web3Ctx.account ?
                <div className="row">
                  <div className="d-grid gap-2 col-5 mx-auto">
                    <button onClick={AcceptLendHandler} value={index} className="btn btn-success">Accept Lending</button>
                  </div>
                  <div className="col-7 d-flex justify-content-end">
                    <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                    <p className="text-start"><b>{`${price}`}</b></p>
                  </div>
                </div> :
                <div className="row">
                  <div className="d-grid gap-2 col-5 mx-auto">
                    <button onClick={cancelHandler} value={index} className="btn btn-danger">CANCEL</button>
                  </div>
                  <div className="col-7 d-flex justify-content-end">
                    <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                    <p className="text-start"><b>{`${price}`}</b></p>
                  </div>
                </div> :
              owner === web3Ctx.account ?              
                <form className="row g-2" onSubmit={(e) => StartBorrowingHandler(e, NFT.id, key, owner, price)}>                
                  <div className="col-5 d-grid gap-2">
                    <button type="submit" className="btn btn-secondary">Collateral</button>
                  </div>
                  <div className="col-7">
                    <input
                      type="number"
                      step="0.01"
                      placeholder="ETH..."
                      className="form-control"
                      ref={priceRefs.current[key]}
                    />
                  </div>                                  
                </form> :
                <p><br/></p>}
          </div>
        );
      })}
    </div>
  );
};

export default LendingCollection;