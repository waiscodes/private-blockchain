class Block {
    constructor(data) {
        this.hash,
        this.height,
        this.tx = data,
        this.time = new Date(),
        this.previousBlockHash
    }
}

module.exports = Block;
