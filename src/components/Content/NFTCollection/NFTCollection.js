import { useContext, useRef, createRef } from 'react';

import {
  ERC721_NFTCOLLECTION_CONTACT_TOKEN_ADDRESS  ,
  ERC721_NFTMARKETPLACE_CONTACT_TOKEN_ADDRESS ,
  ERC721_LENDING_CONTACT_ADDRESS,
  ERC20_ACCEPTED_PAY_TOKEN_ADDRESS
    } from '../../../config';
import web3 from '../../../connection/web3';
import Web3Context from '../../../store/web3-context';
import CollectionContext from '../../../store/collection-context';
import MarketplaceContext from '../../../store/marketplace-context';
import { formatPrice } from '../../../helpers/utils';
import eth from '../../../img/eth.png';
import { parseEther } from '@ethersproject/units';
import { BigNumber } from '@ethersproject/bignumber';
import NFTLENDINGABI from '../../../imported_abis/ERC721Lending';

const NFTCollection = () => {
  const web3Ctx = useContext(Web3Context);
  const collectionCtx = useContext(CollectionContext);
  const marketplaceCtx = useContext(MarketplaceContext);
  const lendingContract = new web3.eth.Contract(
    NFTLENDINGABI.abi, 
    ERC721_LENDING_CONTACT_ADDRESS);

  //console.log("collectionCtx.collection.length 1111 = " + collectionCtx.collection.length);
  const priceRefs = useRef([]);
  if (priceRefs.current.length !== collectionCtx.collection.length) {
    priceRefs.current = Array(collectionCtx.collection.length).fill().map(
          (_, i) => priceRefs.current[i] || createRef());
  }
  
  const  LoanOfferHandler = async (event, tokenIdx, price) => {
    event.preventDefault();
    
    const tokenId = marketplaceCtx.offers[tokenIdx].offerId;
    console.log("LoaningNFT tokenId = " + tokenId);
    
    const collectionContractAddress = collectionCtx.contract.options.address;  //nft contract address
    const tokenAddress = marketplaceCtx.contract.options.address;  //nft contract address
    const nftPrice = price;//priceRefs.current[key].current.attributes.price-0;
    //console.log(tokenAddress); return;

    lendingContract.events.ERC721ForLendUpdated()
          .on('data', (event) => {
            console.log("ERC721ForLendUpdated on data: ");
            console.log(event.returnValues.tokenAddress);
          })
          .on('error', (error) => {
            console.log("ERC721ForLendUpdated error: ");
            console.log(error);
          });
    const payAddress = await lendingContract.methods.acceptedPayTokenAddress().call();

    console.log("payAddress = " + payAddress);
    if(payAddress.substr(0,10)=="0x00000000")
    {
      lendingContract.methods.initialize(ERC20_ACCEPTED_PAY_TOKEN_ADDRESS)
        .send({ from: web3Ctx.account })
        .on('transactionHash', (hash) => {});
    }

    //call lent start
    {
      const durationHours = 30 * 24;                        //30 days
      const initialWorthNum = nftPrice;
      const initialWorth = parseEther(initialWorthNum);
              
      const APR = 30;                                       // annual prefit ratio = 30%

      var earningGoalNum = (initialWorthNum) * (100 + APR) / 100 / 365 * durationHours;
      var lst = earningGoalNum.toString().split('.');
      earningGoalNum = lst[0] + '.' + lst[1].substring(0,18);
      const earningGoal = parseEther( (earningGoalNum - initialWorthNum).toString() );       // BigNumber for Ethereum

      console.log(tokenAddress + ' , ' + tokenId + ' : ' + durationHours + ' ' + initialWorth + ' ' + earningGoal);     
      //720 , //0x2386f26fc10000  , //0x5b1aeec098a858

      lendingContract.methods.offerLoaningNft(
                tokenAddress, tokenId, durationHours, initialWorth , earningGoal)
          .send({ from: web3Ctx.account })
          .on('transactionHash', (hash) => {
              //console.log("offerLoaningNft transactionHash : " + tokenId + ' ' + hash);
              marketplaceCtx.setMktIsLoading(true);
            })
          .on('receipt', (receipt) => {      
            console.log("offerLoaningNft returned lentCount = ");
            console.log(receipt);
          })
          .on('error', (error) => {
            window.alert('Something went wrong when pushing a Offer for Loaning NFT to the blockchain');
            marketplaceCtx.setMktIsLoading(false);
          });
    }
  };

  const makeOfferHandler = (event, id, key) => {
    event.preventDefault();
    if(priceRefs.current[key].current.value=='')
    {
      alert("pelase input offer price");
      return;
    }
    const enteredPrice = web3.utils.toWei(priceRefs.current[key].current.value, 'ether');
    
    console.log("make Offer informations");
    console.log(marketplaceCtx.contract.options.address + ' ' + id + ' ' + enteredPrice);

    collectionCtx.contract.methods
      .approve(marketplaceCtx.contract.options.address, id)
      .send({ from: web3Ctx.account })
      .on('transactionHash', (hash) => {
        marketplaceCtx.setMktIsLoading(true);
      })
      .on('receipt', (receipt) => {      
        marketplaceCtx.contract.methods
        .makeOffer(id, enteredPrice).send({ from: web3Ctx.account })
        .on('error', (error) => {
          window.alert('Something went wrong when pushing a Approve Request to the blockchain');
          marketplaceCtx.setMktIsLoading(false);
        }); 
      });
  };
  
  const buyHandler = (event) => {    
    const buyIndex = parseInt(event.target.value);      
    marketplaceCtx.contract.methods.fillOffer(marketplaceCtx.offers[buyIndex].offerId).send({ from: web3Ctx.account, value: marketplaceCtx.offers[buyIndex].price })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing a Offer Request to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });            
  };
  
  const cancelHandler = (event) => {    
    const cancelIndex = parseInt(event.target.value);
    console.log("cancel offerId = " + marketplaceCtx.offers[cancelIndex].offerId);
    marketplaceCtx.contract.methods.cancelOffer(marketplaceCtx.offers[cancelIndex].offerId).send({ from: web3Ctx.account })
    .on('transactionHash', (hash) => {
      marketplaceCtx.setMktIsLoading(true);
    })
    .on('error', (error) => {
      window.alert('Something went wrong when pushing to the blockchain');
      marketplaceCtx.setMktIsLoading(false);
    });    
  };
 
  //console.log("collectionCtx.collection:"); console.log(collectionCtx.collection);

  return(
    <div className="row text-center">
      { 
        // console.log("marketplaceCtx = ") , console.log(marketplaceCtx) , 
        // console.log("collection length = ") , console.log(collectionCtx.collection.length) ,
        collectionCtx.collection.map((NFT, key) => {
        const index = marketplaceCtx.offers ? marketplaceCtx.offers.findIndex(offer => offer.id === NFT.id) : -1;
        const owner = index === -1 ? NFT.owner : marketplaceCtx.offers[index].user;
        const price = index !== -1 ? formatPrice(marketplaceCtx.offers[index].price).toFixed(2) : null;
        const lentStatus = index !== -1 ? marketplaceCtx.offers[index].lentStatus : null;
        
        //console.log(lentStatus);

        if(lentStatus!==null && lentStatus!==0) return false;
        
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
                    <div className="d-grid gap-2 col-5 mx-auto">
                      <button onClick={buyHandler} value={index} className="btn btn-success">BUY</button>
                    </div>
                    <div className="col-7 d-flex justify-content-end">
                      <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                      <p className="text-start"><b>{`${price}`}</b></p>
                    </div>
                  </div> 
                </div>:    // this is offered NFT for sale by me.

                <div>
                  <div className="row">
                    <div className="d-grid gap-2 col-5 mx-auto">
                      <button onClick={cancelHandler} value={index} className="btn btn-danger">CANCEL</button>
                    </div>
                    <div className="col-7 d-flex justify-content-end">
                      <img src={eth} width="25" height="25" className="align-center float-start" alt="price icon"></img>                
                      <p className="text-start"><b>{`${price}`}</b></p>
                    </div>
                  </div> 
                  <form className="row g-2" onSubmit={(e) => LoanOfferHandler(e, index, price)}>                
                    <div className="col-12 d-grid gap-2">
                      <button type="submit" className="btn btn-info">Offer Loan</button>
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
                    </div>                                   */}
                  </form>
                </div>
                :  // this is non-offered NFT and normal owned for user.
                
                
                
              owner === web3Ctx.account ?              
                <div>
                  <form className="row g-2" onSubmit={(e) => makeOfferHandler(e, NFT.id, key)}>                
                    <div className="col-5 d-grid gap-2">
                      <button type="submit" className="btn btn-secondary">Sale Offer</button>
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
                  </form>
                  
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

export default NFTCollection;