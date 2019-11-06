pragma experimental ABIEncoderV2;
pragma solidity ^0.5.12;

contract DeviceDefaultAttribute {
  enum Criticality {LOW, MEDIUM, HIGH}

  struct Attribute {
    string name;
    int256 minimunThreshold;
    uint256 minimunViolationCount;
    Criticality minimumCriticality;
    int256 maximumThresold;
    uint256 maximumViolationCount;
    Criticality maximumCriticality;
  }

  function getAllAttributeCount() public view returns (uint);

  function addDefaultAttribute(
    string memory _modelName,
    string memory _attributeName,
    int256 _minimumThresold, uint256 _minimumViolationCount, Criticality _minimumCriticality,
    int256 _maximumThresold, uint256 _maximumViolationCount, Criticality _maximumCriticality
  ) public;

  function getDefaulltAttributeIndicesByModelName(string memory _modelName) public view returns (Attribute[] memory);
}

contract DeviceProfiles {

  DeviceDefaultAttribute public called_address;

  struct Device {
    // Store device info (id, ip, model)
    uint deviceId;
    string deviceIp;
    string deviceModel;

    // Interval time for sampling data in minutes
    uint samplingRateMinute;

    // Store ipfs hash code of device's model software
    string softwareIpfsHash;

    // Store attributes count
    uint attributeCount;

    // Store & fetch Attributes
    mapping(uint => DeviceDefaultAttribute.Attribute) attributes;

    // Get ipfs hash code of each attribute monitoring data (by attribute name)
    mapping(string => string) attributeNameDataIpfsHashMap;
  }

  // Store devices count
  uint public devicesCount;

  // Store & fetch devices
  mapping(uint => Device) public devices;

  // Test
  uint public attrCount;

  // Emit this event after adding devices
  event DeviceAdded(
    uint deivceId,
    string deviceIp,
    string deviceModel
  );

  constructor (address _addy) public {
    called_address = DeviceDefaultAttribute(_addy);

    // Remove these lines
    addDevice("1.1.1.1", "model 1", 1);
    addAttributeToDeviceById(
      1,
      "attribute name 1",
      200,
      2,
      DeviceDefaultAttribute.Criticality.LOW,
      400,
      2,
      DeviceDefaultAttribute.Criticality.LOW
    );
    addAttributeToDeviceById(
      1,
      "attribute name 2",
      200,
      2,
      DeviceDefaultAttribute.Criticality.LOW,
      400,
      2,
      DeviceDefaultAttribute.Criticality.LOW
    );
  }

  function callDeviceDefaultAttributeMethod() public view returns (DeviceDefaultAttribute.Attribute[] memory){
    return called_address.getDefaulltAttributeIndicesByModelName("RaspberryPi");
  }

  function addDevice(
    string memory _ip,
    string memory _model,
    uint _samplingRateMinute
  ) public {
    devicesCount ++;
    Device memory device = devices[devicesCount];
    device.deviceId = devicesCount;
    device.deviceIp = _ip;
    device.deviceModel = _model;
    device.samplingRateMinute = _samplingRateMinute;
    devices[devicesCount] = device;
    emit DeviceAdded(device.deviceId, device.deviceIp, device.deviceModel);
  }

  function addAttributeToDeviceById(
    uint _deviceId,
    string memory _name,
    int256 _minimunThreshold,
    uint256 _minimunViolationCount,
    DeviceDefaultAttribute.Criticality _minimumCriticality,
    int256 _maximumThresold,
    uint256 _maximumViolationCount,
    DeviceDefaultAttribute.Criticality _maximumCriticality
  ) public returns (uint256){
    Device storage device = devices[_deviceId];
    uint counter = device.attributeCount;
    device.attributeCount = counter + 1;
    DeviceDefaultAttribute.Attribute memory attribute =
    DeviceDefaultAttribute.Attribute(
      _name,
      _minimunThreshold,
      _minimunViolationCount,
      _minimumCriticality,
      _maximumThresold,
      _maximumViolationCount,
      _maximumCriticality
    );
    device.attributes[device.attributeCount] = attribute;
    devices[_deviceId] = device;
    return device.attributeCount;
  }

  function getDeviceAttributes(uint _deviceId)
  public
  returns (
    DeviceDefaultAttribute.Attribute[] memory
  ){
    Device storage device = devices[_deviceId];
    uint size = device.attributeCount;
    attrCount = size;
    DeviceDefaultAttribute.Attribute[] memory attributes = new DeviceDefaultAttribute.Attribute[](size);
    for (uint i = 1; i <= size; i++) {
      attributes[i - 1] = device.attributes[i];
    }
    return attributes;
  }
}