pragma solidity ^0.5.12;

import "./12-1- SafeMath.sol";

contract TestMathLibrary2 {
    using SafeMath for uint256;
    function divide(uint256 a, uint256 b) public pure returns(uint256){
        return a.div(b);
    }
}