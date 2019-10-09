pragma solidity ^0.5.12;

contract UsingTimeTemplate {
    
    uint256 public studentsCount;
    mapping(uint => Student) public students;
    
    // Current block timestamp (alias for block.timestamp)
    uint public creationTime = now;

    struct Student {
        string firstName;
        string lastName;
        uint256 id;
    }
    
    modifier onlyAfter(uint _time) {
        require(now >= _time, "Function called too early.");
        _;
    }
    
    // May only be called 2 minutes after the contract has been created.
    function addStudent(string memory firstName, string memory lastName, uint256 id)  
    public
    onlyAfter(creationTime + 2 minutes)
    {
        increaseStudentsCount();
        students[studentsCount] = Student(firstName, lastName, id);
    }
        
    function getStudentFirstName(uint index) public view returns(string memory){
        return students[index].firstName;
    }
    
    function getStudentLastName(uint index) public view returns(string memory){
        return students[index].lastName;
    }
    
    function increaseStudentsCount() internal {
        studentsCount += 1;
    }
}