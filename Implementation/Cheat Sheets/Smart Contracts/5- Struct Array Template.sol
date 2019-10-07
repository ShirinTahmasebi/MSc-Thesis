pragma experimental ABIEncoderV2;
pragma solidity ^0.5.12;

contract StructArrayTemplate {
    Student[] students;
    
    struct Student {
        string firstName;
        string lastName;
        uint256 id;
    }
    
    constructor() public {
        students.push(Student("default first name", "default last name", 1));
    }
    
    function getStudent(uint index) public view returns(Student memory){
        // Returning a struct (or a tuple) is not supported until compiler versoin 0.5.12
        // So, I used pragma experimental ABIEncoderV2;
        // This may not be suitable solution for other applications
        // By the way, there is no way to get all array items at once.
        return students[index];
    }
    
    function addStudent(string memory firstName, string memory lastName, uint256 id) public {
        students.push(Student(firstName, lastName, id));
    }
}