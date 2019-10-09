pragma experimental ABIEncoderV2;
pragma solidity ^0.5.12;

contract MappingTemplate {
    uint256 public studentsCount;
    mapping(uint => Student) public students;
    
    struct Student {
        string firstName;
        string lastName;
        uint256 id;
    }
    
    function getStudent(uint index) public view returns(Student memory){
        return students[index];
    }
    
    function addStudent(string memory firstName, string memory lastName, uint256 id) public {
        studentsCount += 1;
        students[id] = Student(firstName, lastName, id);
    }
}