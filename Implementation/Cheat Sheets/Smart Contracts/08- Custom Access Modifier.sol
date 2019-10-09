pragma solidity ^0.5.12;

// ref: https://coursetro.com/posts/code/101/Solidity-Modifier-Tutorial---Control-Functions-with-Modifiers

// In our case, we will create a modifier that allows only the contract owner to 
// run a given function. In the context of our project, this will mean only allowing
// the contract owner to access the setInstructor() function.

contract CustomAccessModifier {
    
    uint256 public studentsCount;
    mapping(uint => Student) public students;
    
    // We have to define a new variable as a type of address
    address owner;
    
    struct Student {
        string firstName;
        string lastName;
        uint256 id;
    }
    
    // We have to call the constructor method in order to set the owner 
    // variable to the address that created the contract.
    // The constructor function is called only once, which is when the contract is first created
    constructor() public {
        owner = msg.sender;
    }
    
    // So, to create a modifier, you first start by stating modifier and the name of the modifier.
    // In our case, it will be onlyOwner which can be used multiple times as a modifier depending on your needs.
    
    // Note: Modifiers can also receive arguments, ie: modifier name(arg1)
    // Inside of our modifier, we're saying require() which is a way of saying, 
    // "if the condition is not true, throw an exception".
    // If the condition is true, _; on the line beneath is where the function body is placed.
    // In other words, the function will be executed.
    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }
    
    // Notice onlyOwner is specified just after the arguments of the function. That's all it takes!
    function addStudent(string memory firstName, string memory lastName, uint256 id) onlyOwner public {
        increaseStudentsCount();
        students[studentsCount] = Student(firstName, lastName, id);
    }
        
    function getStudentFirstName(uint index) public view returns(string memory){
        return students[index].firstName;
    }
    
    function getStudentLastName(uint index) public view returns(string memory){
        return students[index].lastName;
    }
    
    // Private modifier for functions using 'internal' keyword
    function increaseStudentsCount() internal {
        studentsCount += 1;
    }
}
