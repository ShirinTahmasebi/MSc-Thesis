pragma solidity ^0.5.12;

contract Callee {
    uint public a = 1;
    
    function setA(uint _a) public returns (uint) {
        a = _a;
        return a;
    }
}