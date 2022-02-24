const  LOANCONTACT_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "uint"
      }
    ],
    "name": "recoverEth",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "id",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "type" : "bool"
      }],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type" : "address",        "name" : "nftContract" },
        {"type":"uint",        "name" : "nftId" }, 
        {"type":"uint", "name" : "endTime"}, 
        {"type":"uint", "name" : "borrowCeiling"}, 
        {"type":"uint", "name" : "interest"      }
    ],
    "name": "getId",
    "outputs": [ 
      {
        "type":"uint"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
        {"type" : "address",        "name" : "nftContract" },
        {"type":"uint",        "name" : "nftId" }, 
        {"type":"uint", "name" : "endTime"}, 
        {"type":"uint", "name" : "borrowCeiling"}, 
        {"type":"uint", "name" : "interestPerEthPerDay"      },
        {"type":"bool",  "name" : "isERC721" }
    ],
    "name": "repay",
    "outputs": [ 
      {
        "type":"uint"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
        {"type" : "address",        "name" : "nftContract" },
        {"type":"uint",        "name" : "nftId" }, 
        {"type":"uint", "name" : "endTime"}, 
        {"type":"uint", "name" : "borrowCeiling"}, 
        {"type":"uint", "name" : "interestPerEthPerDay"      },
        {"type":"address",  "name" : "currentOwner" }
    ],
    "name": "lend",
    "outputs": [ 
      {
        "type":"uint"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
        {"type":"uint",     "name" : "Id" }, 
        {"type":"address",  "name" : "account" }
    ],
    "name": "getUnderlyingBalance",
    "outputs": [ 
      {
        "type":"uint",
        "name":"depositTokensOwned"
      },
      {
        "type":"uint",
        "name":"ethWithInterest"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type" : "address",        "name" : "nftContract" },
      {"type":"uint",        "name" : "nftId" }, 
      {"type":"uint", "name" : "endTime"}, 
      {"type":"uint", "name" : "borrowCeiling"}, 
      {"type":"uint", "name" : "interestPerEthPerDay"      },
      {"type":"bool", "name" : "isERC721"      },
      {"type":"address",  "name" : "previousOwner" },
      {"type":"string",  "name" : "_name" }      ,
      {"type":"string",  "name" : "_symbol" }
    ],
    "name": "rug",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"uint",        "name" : "id" }
    ],
    "name": "mintRuggedTokens",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"uint",        "name" : "id" }
    ],
    "name": "getFractionalTokens",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"uint",        "name" : "id" }
    ],
    "name": "sweepDust",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"uint",        "name" : "id", "type":"uint", "name":"amountInTokens" }
    ],
    "name": "getPartialFractionalTokens",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"uint",        "name" : "id", "type":"uint", "name":"amountInTokens" }
    ],
    "name": "sweepFractionalTokens",
    "outputs": [ 
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"address", "name":"_operator"},
      {"type":"address", "name":"_from" },
      {"type":"uint256", "name":" _tokenId" },
      {"type":"bytes", "name":"_data"}
    ],
    "name": "onERC721Received",
    "outputs": [ {
      "type":"base64"}
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"type":"address", "name":"_operator"},
      {"type":"address", "name":"_from" },
      {"type":"uint256", "name":" _id" },
      {"type":"uint256", "name":"_value"},
      {"type":"bytes", "name":"_data"}
    ],
    "name": "onERC1155Received",
    "outputs": [ {
      "type":"base64"}
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

export default LOANCONTACT_ABI;