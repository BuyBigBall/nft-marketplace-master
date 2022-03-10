// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFTCollection.sol";
import "hardhat/console.sol";

contract NFTMarketplace {
  NFTCollection nftCollection;
  
  uint public offerCount;
  address public collectionAddress;
  
  struct _Offer {
    uint offerId;
    uint id;
    address user;
    uint price;
    bool fulfilled;
    bool cancelled;
    uint lentStatus;      // 1-offerLoan, 2-lent, 0-returned(normal)
  }

  event Offered( uint offerId,uint id,address user,uint price,bool fulfilled,bool cancelled );
  event OfferCancelled(uint offerId, uint id, address owner);
  event OfferFilled(uint offerId, uint id, address newOwner);
  event ClaimFunds(address user, uint amount);
  event loanOffered(uint tokenId, uint id, address owner);
  event loanBorrowingStarted(uint tokenId, uint id, address owner);
  event loanBorrowingStopped(uint tokenId, uint id, address owner);
  event loanBorrowingClaimed(uint tokenId, uint id, address owner);

  mapping (uint => _Offer)  public offers;
  mapping (address => uint) public userFunds;

  constructor(address _nftCollection) {
    nftCollection = NFTCollection(_nftCollection);
    collectionAddress  = _nftCollection;
  }

   
  function cancelOffer(uint _offerId) public {
    _Offer storage _offer = offers[_offerId];
    require(_offer.offerId == _offerId, 'The offer must exist');
    require(_offer.user == msg.sender, 'The offer can only be canceled by the owner');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    nftCollection.transferFrom(address(this), msg.sender, _offer.id);       // this class contract address
    _offer.cancelled = true;
    emit OfferCancelled(_offerId, _offer.id, msg.sender);
  }


  function makeOffer(uint _id, uint _price) public {

    nftCollection.transferFrom(
            msg.sender,     // from
            address(this),  // to         // this class contract address
            _id);           // tokenId
    offerCount ++;
    offers[offerCount] = _Offer(offerCount, _id, msg.sender, _price, false, false, 0);
    emit Offered(offerCount, _id, msg.sender, _price, false, false);
  }

  function fillOffer(uint _offerId) public payable {
    _Offer storage _offer = offers[_offerId];
    require(_offer.offerId == _offerId, 'The offer must exist');
    require(_offer.user != msg.sender, 'The owner of the offer cannot fill it');
    require(!_offer.fulfilled, 'An offer cannot be fulfilled twice');
    require(!_offer.cancelled, 'A cancelled offer cannot be fulfilled');
    require(msg.value == _offer.price, 'The ETH amount should match with the NFT Price');
    nftCollection.transferFrom(address(this), msg.sender, _offer.id);     // this class contract address
    _offer.fulfilled = true;
    userFunds[_offer.user] += msg.value;
    emit OfferFilled(_offerId, _offer.id, msg.sender);
  }

  
  function offerLoaningNft(uint _offerId, address lentContractAddress) external {
    _Offer storage _offer = offers[_offerId];
    require(_offer.offerId == _offerId, 'The offer must exist');
    //require(_offer.user == msg.sender, 'The offer can only be canceled by the owner');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    nftCollection.transferFrom(address(this), lentContractAddress, _offer.id);       // this class contract address
    _offer.lentStatus = 1;
    emit loanOffered(_offerId, _offer.id, msg.sender);
  }
  
  function cancelOfferLoaning(uint _offerId, address lentContractAddress) external {
    _Offer storage _offer = offers[_offerId];
    require(_offer.offerId == _offerId, 'The offer must exist');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    require(lentContractAddress!=address(0), 'ignore my test');
    
    _offer.lentStatus = 0;
    emit loanOffered(_offerId, _offer.id, msg.sender);
  }

  function claimFunds() public {
    require(userFunds[msg.sender] > 0, 'This user has no funds to be claimed');
    payable(msg.sender).transfer(userFunds[msg.sender]);
    emit ClaimFunds(msg.sender, userFunds[msg.sender]);
    userFunds[msg.sender] = 0;    
  }

  function StopBorrowing(uint tokenId) public {
    _Offer storage _offer = offers[tokenId];
    require(_offer.offerId == tokenId, 'The offer must exist');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    _offer.lentStatus = 1;
    emit loanBorrowingStopped(tokenId, _offer.id, msg.sender);
  }

  function StartBorrowing(uint tokenId) public {
    _Offer storage _offer = offers[tokenId];
    require(_offer.offerId == tokenId, 'The offer must exist');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    _offer.lentStatus = 2;
    emit loanBorrowingStarted(tokenId, _offer.id, msg.sender);
  }

  function claimLoaning(uint tokenId) public {
    _Offer storage _offer = offers[tokenId];
    require(_offer.offerId == tokenId, 'The offer must exist');
    require(_offer.fulfilled == false, 'A fulfilled offer cannot be cancelled');
    require(_offer.cancelled == false, 'An offer cannot be cancelled twice');
    _offer.lentStatus = 0;
    emit loanBorrowingClaimed(tokenId, _offer.id, msg.sender);
  }
  // Fallback: reverts if Ether is sent to this smart-contract by mistake
  fallback () external {
    revert();
  }
}
  