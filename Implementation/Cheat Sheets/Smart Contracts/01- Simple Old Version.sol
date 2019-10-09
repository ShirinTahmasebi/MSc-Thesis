// The first line simply tells that the source code is written for Solidity version 0.4.0 
// or anything newer that does not break functionality (up to, but not including, version 0.5.0). 
// This is to ensure that the contract does not suddenly behave differently with a new compiler 
// version. The keyword pragma is called that way because, in general, pragmas are instructions
// for the compiler about how to treat the source code
pragma solidity ^0.4.24;

contract OldVersion {
    // Solidity is a statically typed language, which means that the type of each variable 
    // (state and local) needs to be specified (or at least known - see Type Deduction below) at compile-time. 
    string value;
    
    // Like any other programming languages we can have constructor for our contracts
    constructor() public {
        value = "Initial Value";
    }
    
    // In this function we are going to write value to our state
    // So, to execute this function we have to spend gas
    // This function doesnot return anything
    function setValue(string x) public {
        value = x;
    }
    
    // This function is just for reading states. We don't want to write any state using this function.
    // So, we are recommended to use "view" keyword
    // By the way, pay attention to return type: returns(string)
    function getValue() public view returns(string) {
        return value;
    }
}