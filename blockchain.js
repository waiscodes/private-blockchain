const SHA256 = require('crypto-js/sha256')
const Block = require('./block')

class Blockchain {
    constructor() {
        this.chain = []
        this.addBlock(new Block("Genesis Block"));
    }

    addBlock(newBlock) {
        if (this.chain.length > 0) {
            newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash
        }
        newBlock.height = this.chain.length
        newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
        this.chain.push(newBlock);
    }
}

module.exports = Blockchain;