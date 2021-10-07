const Blockchain = require('./blockchain');
const Block = require('./block');

const chainz = new Blockchain()
chainz.addBlock(new Block("Block numero uno"))
console.log(chainz.chain)

