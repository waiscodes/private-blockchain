const Block = require('./block')

class Blockchain {
    constructor() {
        this.chain = []
    }

    addBlock(newBlock) {
        this.chain.push(newBlock);
    }
}

