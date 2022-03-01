const  NFTLENDING_ABI = [
    {
        "constant": false,
        "inputs": [
          {
            "name": "tokenAddress",
            "type": "address"
          }
        ],
        "name": "initialize",
        "outputs": [
          {
           
          }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "name": "durationHours",
          "type": "uint256"
        },
        {
          "name": "initialWorth",
          "type": "uint256"
        },
        {
          "name": "earningGoal",
          "type": "uint256"
        }
      ],
      "name": "setLendSettings",
      "outputs": [
        {
          "type":"uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
    "constant": false,
    "inputs": [
    ],
    "name": "getLentCount",
    "outputs": [
      {
        "type":"uint"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
    
  ];

export default NFTLENDING_ABI;