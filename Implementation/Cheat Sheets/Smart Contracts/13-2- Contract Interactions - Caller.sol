pragma solidity ^0.5.12;

contract Callee {
    function setA(uint) public returns (uint) {}
    function a() public pure returns (uint) {}
}

contract Caller  {
    Callee dc;

    constructor(address _t) public {
        dc = Callee(_t);
    }
 
    function getA() public view returns (uint result) {
        return dc.a();
    }
    
    function setA(uint _val) public returns (uint result) {
        dc.setA(_val);
        return _val;
    }
}