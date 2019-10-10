pragma solidity ^0.5.12;

contract InteractingContracts {
    function getMainContractCallerByMsgSender() public view returns (address){
        return msg.sender;
    }
    
    function getMainContractCallerByTxOrigin() public view returns (address){
        // tx.origin is the address of actual user or actual contract which has first triggered a call to this method.
        return tx.origin;
    }
    
    function getSecondContractCallerByMsgSender(address secondContractAddress) public view returns (address){
        // We should pass the SecondContract address to the constructor to create an instance
        return SecondContract(secondContractAddress).getContractCallerByMsgSender();
    }
    
    function getSecondContractCallerByTxOrigin() public view returns (address){
        return tx.origin;
    }
}

contract SecondContract {
    function getContractCallerByMsgSender() public view returns (address){
        return msg.sender;
    }
    
    function getContractCallerByTxOrigin() public view returns (address){
        return tx.origin;
    }
}