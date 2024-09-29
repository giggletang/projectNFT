
// SPDX-License-Identifier: MIT
pragma solidity >=0.8.12;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ProjectNFT is ERC721 {

  uint256 private totalSupply;
  string private ipfsBaseURI;

  constructor(string memory _name, string memory _symbol, string memory baseURI)
    ERC721(_name, _symbol) {
      ipfsBaseURI = baseURI;
    }

  function mint() public {
    totalSupply++;
    _safeMint(msg.sender, totalSupply);
  }

  function _baseURI() internal view override returns (string memory) {
    return ipfsBaseURI;
  }

}