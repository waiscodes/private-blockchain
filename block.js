class Block {
    constructor(data) {
        this.hash,
        this.height,
        this.tx = data,
        this.time,
        this.previousBlockHash
    }
}

module.exports = Block;
