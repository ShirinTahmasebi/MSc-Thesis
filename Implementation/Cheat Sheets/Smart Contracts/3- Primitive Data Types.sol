pragma solidity ^0.5.12;

contract DataTypeTest {
    string constant constStringValue = "Const String Value";
    string normalStringValue = "Normal String Value";
    bool booleanValue = true;
    int integerValue = -1;
    uint uintValue = 1;
    uint8 uint8Value = 255;
    // Max valid value: power(2, 256) - 1
    uint256 uint256Value = 100000000000000000000000000000000000000000000000000000000000000000000000000000;
    
    function setNormalStringValue (string memory x) public {
        normalStringValue = x;
    }
    
    function getNormalStringValue () public view returns(string memory){
        return normalStringValue;
    }
    
    // Pure is even more restrictive than view.
    // Indicating that it won't even read the storage state.
    function getConstStringValue () public pure returns(string memory){
        return constStringValue;
    }
}