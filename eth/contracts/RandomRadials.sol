// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract RandomRadials is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    uint256 public MAX_NFTS;

    constructor(uint256 maxSupply) ERC721("RandomRadials", "RANDRAD") {
        MAX_NFTS = maxSupply;
    }

    function mintRandomRadial(string memory uri) public returns (uint256) {
        uint256 tokenId = _tokenIdCounter.current();
        require(tokenId < MAX_NFTS, "All RandomRadials have been minted.");
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, uri);
        _tokenIdCounter.increment();

        return tokenId;
    }
}
