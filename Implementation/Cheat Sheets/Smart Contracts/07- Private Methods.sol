pragma solidity ^0.5.12;

contract PrivateModifiers {
    uint256 public studentsCount;
    mapping(uint => Student) public students;
    
    struct Student {
        string firstName;
        string lastName;
        uint256 id;
    }
    
    function getStudentFirstName(uint id) public view returns(string memory){
        return students[id].firstName;
    }
    
    function getStudentLastName(uint id) public view returns(string memory){
        return students[id].lastName;
    }
    
    function addStudent(string memory firstName, string memory lastName, uint256 id) public {
        increaseStudentsCount();
        students[id] = Student(firstName, lastName, id);
    }
    
    // Private modifier for functions using 'internal' keyword
    function increaseStudentsCount() internal {
        studentsCount += 1;
    }
}