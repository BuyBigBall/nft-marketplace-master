import { useContext, useRef, createRef } from 'react';

import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS
    } from '../../../config';
import web3 from '../../../connection/web3';
import Web3Context from '../../../store/web3-context';
import CollectionContext from '../../../store/collection-context';
import MarketplaceContext from '../../../store/marketplace-context';
import LendingContext from '../../../store/lending-context';

import { formatPrice } from '../../../helpers/utils';
import eth from '../../../img/eth.png';
import { parseEther } from '@ethersproject/units';
import { BigNumber } from '@ethersproject/bignumber';
import NFTLENDINGABI from '../../../imported_abis/ERC721Lending';

const NFTLending = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  const lendingCtx = useContext(LendingContext);

  const lendingContract = new web3.eth.Contract(
    NFTLENDINGABI.abi, 
    ERC721_LENDING_CONTACT_ADDRESS);

  const StartLending = (event, tokenIdx, key) => {
      console.log("StartLending tokenIdx = "+tokenIdx);
      event.preventDefault();
  }
  
  const CancelLoan = (event, tokenIdx, key) => {
    event.preventDefault();
      const tokenId = marketplaceCtx.offers[tokenIdx].offerId;
      const tokenAddress = marketplaceCtx.contract.options.address;  //nft contract address

      console.log("CancelLoan tokenIdx = "+tokenIdx + ' ' + tokenId + ' ' + tokenAddress);
      
      lendingContract.methods.cancelOfferLoaning(tokenAddress, tokenId)
            .send({ from: web3Ctx.account })
            .on('transactionHash', (hash) => {
                console.log("cancelOfferLoaning called : " + hash)  
                lendingCtx.cancelLoanOffer(lendingContract, tokenId, false);
                });
  }
  // console.log("collectionCtx.collection:"); console.log(collectionCtx.collection);
  // console.log(lendingCtx.collection.length);
    
  function getLoanInfo(tokenAddress, tokenId)
  {
    const LoanNFT = lendingCtx.collection.filter(coll => coll.tokenAddress==tokenAddress &&  coll.tokenId==tokenId );
    return LoanNFT;
  }

  return(
    <div className="row text-center">
      { 
        collectionCtx.collection.map((NFT, key) => {
        const index = marketplaceCtx.offers ? marketplaceCtx.offers.findIndex(offer => offer.id === NFT.id) : -1;
        const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
        const price = index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;
        const lentStatus = index !== -1 ? marketplaceCtx.offers[index].lentStatus : null;
        
        
        if(lentStatus==null || lentStatus==0) return false;

        const tokenAddress = marketplaceCtx.contract.options.address;  //nft contract address
        const tokenId = marketplaceCtx.offers[index].offerId;
        var lendInformation = getLoanInfo(tokenAddress, tokenId);
        // console.log( lendInformation);
        var price1 = 0;
        var price2 = 0;
        if(lendInformation.length>0)
        {
          lendInformation = lendInformation[0];
          price1 = lendInformation.initialWorth / 1000000000000000000.0;
          price2 = (lendInformation.earningGoal  / 1000000000000000000.0).toString().substr(0,15);
        }
        // console.log( lendInformation.initialWorth ); return false;
        return(
          <div key={key} className="col-md-3 m-3 pb-3 card border-info">
            <div className={"card-body"}>       
              <h5 className="card-title">{NFT.title}</h5>
            </div>
            <img src={`https://ipfs.infura.io/ipfs/${NFT.img}`} className="card-img-bottom" alt={`NFT ${key}`} />
            <p className="fw-light fs-6">creator: {`${owner.substr(0,7)}...${owner.substr(owner.length - 7)}`}</p>
            {index !== -1 ?  // this is offered NFT for sale by other man.



              owner !== web3Ctx.account ?
              <div>
                  <div className="row">
                    {/* <div className="d-grid gap-2 col-5 mx-auto">
                      <button onClick={cancelHandler} value={index} className="btn btn-danger">CANCEL</button>
                    </div> */}
                    <div className="col-5 d-flex justify-content-end">
                      Initial Price:
                    </div>
                    <div className="col-7 text-start">
                      <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                        <b> {`${price1}`}</b></div>

                    <div className="col-5 d-flex justify-content-end">
                      Eraning Price:
                    </div>
                    <div className="col-7 text-start">
                        <img src={eth} width="25" height="25" className="align-center float-start" 
                              alt="price icon"></img>                <b> {`${price2}`}</b></div>

                  </div> 
                  <form className="row g-2" onSubmit={(e) => StartLending(e, index, key)}>                
                    <div className="col-12 d-grid gap-2 text-center">
                      <button type="submit" className="btn btn-primary">Approve Lending</button>
                    </div>
                    {/* <div className="col-7">
                      <input
                        type="number"
                        step="0.01"
                        placeholder="ETH..."
                        className="form-control"
                        price={`${price}`}
                        ref={priceRefs.current[key]}
                      />                        
                    </div> */}
                  </form>
                </div>
                :    // this is offered NFT for sale by me.

                <div>
                  <div className="row">
                    {/* <div className="d-grid gap-2 col-5 mx-auto">
                      <button onClick={cancelHandler} value={index} className="btn btn-danger">CANCEL</button>
                    </div> */}
                    <div className="col-5 d-flex justify-content-end">
                      Initial Price:
                    </div>
                    <div className="col-7 text-start">
                      <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                        <b> {`${price1}`}</b></div>

                    <div className="col-5 d-flex justify-content-end">
                      Eraning Price:
                    </div>
                    <div className="col-7 text-start">
                        <img src={eth} width="25" height="25" className="align-center float-start" 
                              alt="price icon"></img>                <b> {`${price2}`}</b></div>

                  </div> 
                  <form className="row g-2" onSubmit={(e) => CancelLoan(e, index, key)}>                
                    <div className="col-3 d-grid gap-2"></div>
                    <div className="col-6 d-grid gap-2">
                      <button type="submit" className="btn btn-info">Cancel Loan</button>
                    </div>
                    {/* <div className="col-7">
                      <input
                        type="number"
                        step="0.01"
                        placeholder="ETH..."
                        className="form-control"
                        price={`${price}`}
                        ref={priceRefs.current[key]}
                      />
                    </div> */}
                  </form>
                </div>
                :  // this is non-offered NFT and normal owned for user.
                
                
                
              owner === web3Ctx.account ?              
                <div>
                  makeOfferHandler
                  
              </div>
               :
               <p><br /><br /></p>
                }
          </div>
        );
      })}
    </div>
  );
};

export default NFTLending;