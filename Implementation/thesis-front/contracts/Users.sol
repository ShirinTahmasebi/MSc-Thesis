pragma solidity 0.4.24;

contract Users {

  // Model devices - View mode
  struct Device {
    uint index;
    string id;
    string deviceName;
    string userId;
  }

  // Store & fetch devices
  mapping(uint => Device) public devices;

  // Get user id of each device by device id
  mapping(uint => string) public userIdByDeviceIndex;

  // Get all devices which belong to a specific userId
  mapping(bytes32 => string) public devicesIndicesByUserId;

  // Store devices count
  uint public devicesCount;

  function getDevicesCount() public view returns (uint) {
    return devicesCount;
  }

  // Constructor
  function constructor() {}

  // Add device
  function addDevice(string _id, string _deviceName, string _userId) public {
    devicesCount ++;
    devices[devicesCount] = Device(devicesCount, _id, _deviceName, _userId);
    userIdByDeviceIndex[devicesCount] = _userId;
    devicesIndicesByUserId[stringToBytes32(_userId)] = strConcat(devicesIndicesByUserId[stringToBytes32(_userId)], ":", uint2str(devicesCount));
  }

  function getDeviceIndicesByUserId(string _userId) public view returns (string) {
    return devicesIndicesByUserId[stringToBytes32(_userId)];
  }

  function strConcat(string _a, string _b, string _c, string _d, string _e) internal returns (string){
    bytes memory _ba = bytes(_a);
    bytes memory _bb = bytes(_b);
    bytes memory _bc = bytes(_c);
    bytes memory _bd = bytes(_d);
    bytes memory _be = bytes(_e);
    string memory abcde = new string(_ba.length + _bb.length + _bc.length + _bd.length + _be.length);
    bytes memory babcde = bytes(abcde);
    uint k = 0;
    for (uint i = 0; i < _ba.length; i++) babcde[k++] = _ba[i];
    for (i = 0; i < _bb.length; i++) babcde[k++] = _bb[i];
    for (i = 0; i < _bc.length; i++) babcde[k++] = _bc[i];
    for (i = 0; i < _bd.length; i++) babcde[k++] = _bd[i];
    for (i = 0; i < _be.length; i++) babcde[k++] = _be[i];
    return string(babcde);
  }

  function strConcat(string _a, string _b, string _c, string _d) internal returns (string) {
    return strConcat(_a, _b, _c, _d, "");
  }

  function strConcat(string _a, string _b, string _c) internal returns (string) {
    return strConcat(_a, _b, _c, "", "");
  }

  function strConcat(string _a, string _b) internal returns (string) {
    return strConcat(_a, _b, "", "", "");
  }

  function uint2str(uint i) internal pure returns (string){
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
      bstr[k--] = byte(48 + i % 10);
      i /= 10;
    }
    return string(bstr);
  }

  function stringToBytes32(string memory source) returns (bytes32 result) {
    bytes memory tempEmptyStringTest = bytes(source);
    if (tempEmptyStringTest.length == 0) {
      return 0x0;
    }

    assembly {
      result := mload(add(source, 32))
    }
  }
}