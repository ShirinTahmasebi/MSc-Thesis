pragma solidity ^0.5.12;

contract EnumTemplate {
    enum State {PAUSED, RUNNING, FINISHED}
    State localState = State.PAUSED;
    
    function start() public {
        localState = State.RUNNING;
    }
    
    function pause() public {
        localState = State.PAUSED;
    }
    
    function stop() public {
        localState = State.FINISHED;
    }
    
    function getState() public view returns(string memory){
        if (uint(localState) == 0) {
            return "System is paused.";
        } else if (uint(localState) == 1) {
            return "System is running.";
        } else if (uint(localState) == 2) {
            return "System is finished.";
        } else {
            return "Some unknown state!";
        }
    }
    
    function isSystemRunning() public view returns(bool){
        return State.RUNNING == localState;
    }
}