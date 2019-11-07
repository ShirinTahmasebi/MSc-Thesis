const ipfsClient = require('ipfs-http-client');
let ipfs = ipfsClient('ipfs.infura.io', '5001', {protocol: 'https'});


const addToIpfs = async (content) => {
  if (!ipfs) {
    ipfs = ipfsClient('ipfs.infura.io', '5001', {protocol: 'https'});
  }
  return await ipfs.add(content);
};

const getFromIpfsByHash = async (hash) => {
  if (!ipfs) {
    ipfs = ipfsClient('ipfs.infura.io', '5001', {protocol: 'https'});
  }
  return await ipfs.cat(hash);
};

module.exports = {ipfs, addToIpfs, getFromIpfsByHash};