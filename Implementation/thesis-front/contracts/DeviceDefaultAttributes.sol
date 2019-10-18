pragma solidity ^0.5.12;

contract DeviceDefaultAttributes {
  enum Criticality {LOW, MEDIUM, HIGH}

  struct Attribute {
    // Attribute name
    string name;

    // Minimum thresuld data
    int256 minimunThreshold;
    uint256 minimunViolationCount;
    Criticality minimumCriticality;

    // Maximum thresuld data
    int256 maximumThresold;
    uint256 maximumViolationCount;
    Criticality maximumCriticality;
  }

  // Store & fetch Attributes
  mapping(uint => Attribute) public defaultAttributes;

  // Get all default attributes which belong to a specific model
  mapping(bytes32 => string) public defaulltAttributeIndicesByModelName;

  // Store default attributes count
  uint defaultAttributeCount;

  constructor() public {
    // Model 1
    addDefaultAttribute(
      "RaspberryPi", "attribute1",
      100, 1, Criticality.LOW,
      200, 2, Criticality.HIGH
    );

    addDefaultAttribute(
      "RaspberryPi", "attribute2",
      200, 3, Criticality.LOW,
      300, 4, Criticality.HIGH
    );
    addDefaultAttribute(
      "RaspberryPi", "attribute3",
      400, 5, Criticality.LOW,
      500, 6, Criticality.HIGH
    );

    // Model 2
    addDefaultAttribute(
      "Unknown Model", "attribute1",
      100, 1, Criticality.LOW,
      200, 2, Criticality.HIGH
    );

    addDefaultAttribute(
      "Unknown Model", "attribute2",
      200, 3, Criticality.LOW,
      300, 4, Criticality.HIGH
    );
    addDefaultAttribute(
      "Unknown Model", "attribute3",
      400, 5, Criticality.LOW,
      500, 6, Criticality.HIGH
    );
  }

  function getAllAttributeCount() public view returns (uint) {
    return defaultAttributeCount;
  }

  function addDefaultAttribute(
    string memory _modelName,
    string memory _attributeName,
    int256 _minimumThresold, uint256 _minimumViolationCount, Criticality _minimumCriticality,
    int256 _maximumThresold, uint256 _maximumViolationCount, Criticality _maximumCriticality
  ) public {
    defaultAttributeCount ++;

    // Add attribute to default attributes list
    defaultAttributes[defaultAttributeCount] = Attribute(
      _attributeName,
      _minimumThresold, _minimumViolationCount, _minimumCriticality,
      _maximumThresold, _maximumViolationCount, _maximumCriticality
    );

    // Add attrbute index to its model
    defaulltAttributeIndicesByModelName[stringToBytes32(_modelName)] = strConcat(
      defaulltAttributeIndicesByModelName[stringToBytes32(_modelName)],
      ":",
      uint2str(defaultAttributeCount)
    );
  }

  function getDefaulltAttributeIndicesByModelName(string memory _modelName) public view returns (string memory) {
    return defaulltAttributeIndicesByModelName[stringToBytes32(_modelName)];
  }

  function strConcat(string memory _a, string memory _b, string memory _c, string memory _d, string memory _e) internal pure returns (string memory){
    bytes memory _ba = bytes(_a);
    bytes memory _bb = bytes(_b);
    bytes memory _bc = bytes(_c);
    bytes memory _bd = bytes(_d);
    bytes memory _be = bytes(_e);
    string memory abcde = new string(_ba.length + _bb.length + _bc.length + _bd.length + _be.length);
    bytes memory babcde = bytes(abcde);
    uint k = 0;
    for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
    for (uint i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
    for (uint i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
    for (uint i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
    for (uint i = 0; i < _be.length; i++) babcde[k++] = _be[i];
    return string(babcde);
  }

  function strConcat(string memory _a, string memory _b, string memory _c, string memory _d) internal pure returns (string memory) {
    return strConcat(_a, _b, _c, _d, "");
  }

  function strConcat(string memory _a, string memory _b, string memory _c) internal pure returns (string memory) {
    return strConcat(_a, _b, _c, "", "");
  }

  function strConcat(string memory _a, string memory _b) internal pure returns (string memory) {
    return strConcat(_a, _b, "", "", "");
  }

  function uint2str(uint i) internal pure returns (string memory){
    if (i == 0) return "0";
    uint j = i;
    uint length;
    while (j != 0) {
      length++;
      j /= 10;
    }
    bytes memory bstr = new bytes(length);
    uint k = length - 1;
    while (i != 0) {
      bstr[k--] = byte(uint8(48 + i % 10));
      i /= 10;
    }
    return string(bstr);
  }

  function stringToBytes32(string memory source) public pure returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
      return 0x0;
    }

    assembly {
      result := mload(add(source, 32))
    }
  }
}