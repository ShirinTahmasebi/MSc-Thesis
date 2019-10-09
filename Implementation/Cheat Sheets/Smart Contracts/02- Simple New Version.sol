pragma solidity ^0.5.0;

contract FirstContractNewVersion {
    string value;
    
    constructor() public {
        value = "Initial Value";
    }
    
    // For this version using memory is mandatory.
    // Explicit data location for all variables of struct, array or mapping types is now mandatory. 
    // This is also applied to function parameters and return variables.
    // Memory is temporary. Storage is permanent. 
    // For example, you would perform intermediate computations using memory, 
    // and then save the result to storage.
    function setValue(string memory x ) public {
        value = x;
    }
    
    function getValue() public view returns(string memory) {
        return value;
    }
}