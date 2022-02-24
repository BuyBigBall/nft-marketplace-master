const NFT_MARKETPLACE_CONTRACT = [
{
  "constant": false,
  "inputs": [
    {
      "name": "_id",
      "type": "uint"
    },
    {
      "name": "_price",
      "type": "uint"
    }
  ],
  "name": "makeOffer",
  "outputs": [
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
  ],
  "name": "offerCount",
  "outputs": [
    {"type": "uint256"}
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {"type": "address"}
  ],
  "name": "userFunds",
  "outputs": [
    {"type": "uint256"}
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "constant": false,
  "inputs": [
    {
      "name": "offerId",
      "type": "uint"
    },
    {
      "name": "id",
      "type": "uint"
    },{
      "name": "newOwner",
      "type": "address"
    }
  ],

  "name": "OfferFilled",
  "outputs": [
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "uint",
      "name": "offerId",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "id",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "newOwner",
      "type": "address"
    }
  ],
  
  "name": "CollateralOffered",
  "type": "event"
}
,
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "uint",
      "name": "offerId",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "uint",
      "name": "id",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "owner",
      "type": "address"
    }
  ],
  
  "name": "OfferCancelled",
  "type": "event"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "uint",
      "name": "amount",
      "type": "uint"
    }
  ],
  
  "name": "ClaimFunds",
  "type": "event"
}
,
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "uint",
      "name": "offerId",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "uint",
      "name": "id",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "user",
      "type": "address"
    },
    {
      "indexed": true,
      "internalType": "uint",
      "name": "price",
      "type": "uint"
    },
    {
      "indexed": true,
      "internalType": "bool",
      "name": "fulfilled",
      "type": "bool"
    },
    {
      "indexed": true,
      "internalType": "bool",
      "name": "cancelled",
      "type": "bool"
    }
  ],
  
  "name": "Offer",
  "type": "event"
}
];

export default NFT_MARKETPLACE_CONTRACT;