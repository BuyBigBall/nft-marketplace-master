// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFTCollection.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";

contract NFTCrator is ReentrancyGuardUpgradeable {
  uint256 listingPrice = 0.025 ether; // minimum price, change for what you want
  NFTCollection nftContract;

  using Counters for Counters.Counter;
  Counters.Counter private _items;
  Counters.Counter private _soldItems;


  uint      public cratorCount;
  address   payable owner;

  // interface to marketplace item
    struct CratorItem {
        uint256 itemId;
        // address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable owner;
        uint256 price;
        bool sold;
    }
    mapping(uint256 => CratorItem) private idToCratorItem;

    // declare a event for when a item is created on marketplace
    event CratorItemCreated(
        uint256 indexed itemId,
        // /* address indexed nftContract, */
        uint256 indexed tokenId,
        address seller,
        address owner,
        uint256 price,
        bool sold
    );

    constructor(address _nftCollection) {
        // owner = payable(msg.sender);
        nftContract = NFTCollection(_nftCollection);
    }


    // places an item for sale on the marketplace
    function createCratorItem(
        // address nftContract,
        uint256 tokenId,
        uint256 price
    ) public payable nonReentrant {
        require(price > 0, "Price must be at least 1 wei");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _items.increment();
        uint256 itemId = _items.current();

        idToCratorItem[itemId] = CratorItem(
            itemId,                     //item registerd id
            // nftContract,                //nftContract       -- 
            tokenId,                    //nft item token    --
            payable(msg.sender),        //seller
            payable(address(0)),        //owner
            price,                      //                  --
            false
        );

        //IERC721(nftContract).transferFrom(msg.sender, address(this), tokenId);
        nftContract.transferFrom(msg.sender, address(this), tokenId);

        emit CratorItemCreated(
            itemId,
            // nftContract,
            tokenId,
            msg.sender,
            address(0),
            price,
            false
        );
    }
  
    // creates the sale of a marketplace item
    // transfers ownership of the item, as well as funds between parties
    function createCratorSale(
            //address nftContract, 
            uint256 itemId)
        public
        payable
        nonReentrant
    {
        uint256 price = idToCratorItem[itemId].price;
        uint256 tokenId = idToCratorItem[itemId].tokenId;

        require(
            msg.value == price,
            "Please submit the asking price in order to complete the purchase"
        );

        idToCratorItem[itemId].seller.transfer(msg.value);
        //IERC721(nftContract).transferFrom(address(this), msg.sender, tokenId);
        nftContract.transferFrom(address(this), msg.sender, tokenId);
        idToCratorItem[itemId].owner = payable(msg.sender);
        idToCratorItem[itemId].sold = true;

        _soldItems.increment();

        payable(owner).transfer(listingPrice);
    }

    // returns all unsold marketplace items
    function fetchCratorItems()
        public
        view
        returns (CratorItem[] memory)
    {
        uint256 itemCount = _items.current();
        uint256 unsoldItemCount = _items.current() - _soldItems.current();
        uint256 currentIndex = 0;

        CratorItem[] memory items = new CratorItem[](unsoldItemCount);
        for (uint256 i = 0; i < itemCount; i++) {
            if (idToCratorItem[i + 1].owner == address(0)) {
                uint256 currentId = i + 1;
                CratorItem storage currentItem = idToCratorItem[
                    currentId
                ];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // returns only items that a user has purchased
    function fetchMyNFTs() public view returns (CratorItem[] memory) {
        uint256 totalItemCount = _items.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToCratorItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }

        CratorItem[] memory items = new CratorItem[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToCratorItem[i + 1].owner == msg.sender) {
                uint256 currentId = i + 1;
                CratorItem storage currentItem = idToCratorItem[
                    currentId
                ];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }
        return items;
    }

    // returns only items a user has created
    function fetchItemsCreated()
        public
        view
        returns (CratorItem[] memory)
    {
        uint256 totalItemCount = _items.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToCratorItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        CratorItem[] memory items = new CratorItem[](itemCount);

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToCratorItem[i + 1].seller == msg.sender) {
                uint256 currentId = i + 1;
                CratorItem storage currentItem = idToCratorItem[
                    currentId
                ];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}